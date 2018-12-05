import sqlite3

conn = sqlite3.connect('db')
cur = conn.cursor()



class Meta(type):
    metadata = []
    
    def __new__(cls, name, bases, attr):   
        print(attr)
        if not attr.get('__tablename__'):
            attr['__tablename__'] = name   
        obj = super(Meta, cls).__new__(cls, name, bases, attr)
        if name != 'Base':
            Meta.metadata.append(obj)
        # Заменим каждую функцию на выражение, которое печатает имя функции
        # перед запуском вычисления с предоставленными args и возвращает его результат
    
        return obj


class Base(metaclass=Meta):
        
    def __call__(self, **args):
        print(**args)
    
    def __init__(self, conn, lazy, **args):
        self.__class__.__conn__ = conn
        self.__class__.__lazy__ = lazy
        fields = [k for k in self.__class__.__dict__.keys() if not k.startswith('__')]
        self.__class__.__filter__ = {}
        if args:
            if not set(fields).issuperset(set(args.keys())):
                raise Exception
            self.__class__.__filter__ = args

    
    @classmethod
    def create_table(cls, *args):
        if args:
            if not set(Base.metadata).issuperset(set(args)):
                raise Exception
            tables_lst = args
        else:
            tables_lst = Base.metadata
            
        for table in tables_lst:
            create_fileds = ['%s %s' % (key, ' '.join(value)) for key, value in table.__dict__.items() if not key.startswith('__')]
            foreign_keys = []
            if table.__dict__.get('__relationships__'):
                foreign_keys = ['FOREIGN KEYS (%s) REFERENCES %s(%s)' % k for k in table.__relationships__]
            create_fileds.extend(foreign_keys)
            cmd_line = 'CREATE TABLE IF NOT EXISTS %s ( %s );' % (table.__tablename__, ', '.join(create_fileds))
            print(cmd_line)
            conn.executescript(cmd_line)
            
            
        

        
    @classmethod
    def drop_table(cls, *args):
        if args:
            if not set(Base.metadata).issuperset(set(args)):
                raise Exception
            tables_lst = args
        else:
            tables_lst = Base.metadata
            
        for table in tables_lst:
            cmd_line = 'DROP TABLE IF EXISTS %s;' % table.__tablename__
        
        ### ЕСЛИ СУЩЕСТВУЕТ ДОБАВИТЬ, ЕСЛИ НЕТ В СХЕМЕ УДАЛИТЬ
        print(cmd_line)
    
    @classmethod
    def update(cls, **args):
        if args:
            fields = [k for k in cls.__dict__.keys() if not k.startswith('__')]
            if not set(fields).issuperset(set(args.keys())):
                raise Exception
            set_line = ['%s = %s' % (key, value) for key, value in args.items()]
            cmd_line = 'UPDATE %s SET %s;' % (cls.__tablename__, ', '.join(set_line))
        else:
            raise Exception
        
        print(cmd_line)
        ## return executed
        pass
    
    @classmethod
    def insert(cls, **args):
        if args:
            fields = [k for k in cls.__dict__.keys() if not k.startswith('__')]
            if not set(fields).issuperset(set(args.keys())):
                raise Exception
            
            insert_col = args.keys()
            insert_val = list(map(lambda x: args[x], insert_col))
            insert_col_line = ', '.join(insert_col)
            insert_val_line = ', '.join(insert_val)
            cmd_line = 'INSERT INTO %s (%s) VALUES (%s);' %(cls.__tablename__, insert_col_line, insert_val_line)
            print(cmd_line)
            
        else:
            raise Exception


    @classmethod
    def select(cls, *args):
        if args:
            fields = [k for k in cls.__dict__.keys() if not k.startswith('__')]
            if not set(fields).issuperset(set(args)):
                raise Exception
            cmd_line = 'SELECT %s FROM %s;' % (', '.join(args), cls.__tablename__)
        else:
            field_names = [k for k in cls.__dict__.keys() if not k.startswith('__')]
            cmd_line = 'SELECT * FROM %s;' % cls.__tablename__
            
            
        print(cmd_line)
            
    

    
class User(Base):  
    __tablename__ = 'users'
    
    id = ('int', 'required')
    username = ('char(256)', 'not_required')
    
    
    
    
class Posts(Base):  
    __tablename__ = 'posts'
    
    id = ('int', 'required')
    postname = ('char(256)', 'not_required')
    user_id = ('int', 'required')
    
    __relationships__ = (('user_id', 'users', 'id'),)
    


print((User(username='asd', conn=1, lazy=False).update(id='123', username='das')))
#print(User(username='asd').__filter)
print(Base.create_table(Posts))
print(Base.drop_table())
print(User.update(id='123', username='das'))
print(User.insert(id='1', username='das'))
print(User.select('id'))
    
    