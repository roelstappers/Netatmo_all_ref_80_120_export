
// Input file

title = 'Surface skill scores'

framec='RoyalBlue'

v[0] = ['podc','farc','kc','etsc','aic','sedsc','fc','fbc']
t[0] = ['Probability of detection','False alarme ratio','Kuiper skill score','Equitable threat score','Area index','Symmetric Extreme Dependency Score','Frequency','Freq bias']
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] =['ALL','Denmark','Sweden','Finland'] ;
t[3] = v[3] ;
v[4] = ['FF','TT','TTHA','RH','NN']
t[4] = ['U10m','T2m','T2m, height corr.','Rh2m','Cloud cover']
v[5] =[0]
v[5] =v[5].reverse()
t[5] =v[5]
v[6] =['thresholds','classes']
t[6] =v[6]
v[7] =['ALL','00','03','06','09','12','15','18','21'] ;
t[7] = v[7] ;

spec_name =[0,1,2,3,7,4,5,6]

mname = ['Score','Period','Station','Selection','Parameter','Level','Type','Initial time']
loc =['t','l','t','t','l','l','l','l']
do_debug = false ;
pdir ='Surface/'
ext='1.png'
help = 'Observation verification comparison'; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat','Stations','Cont']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html','Surface/[4]_[1].xml','Surface/c_[1]_00000000_[3]_[7]_[4]_0.html']

