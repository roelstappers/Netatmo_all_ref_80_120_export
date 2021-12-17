

title = 'Surface verification' 

framec='Goldenrod'

v[0] = ['V','V_VAR','PS','ps','v'];
t[0] = ['Fc length ver','Fc length var','Timeserie stat','Timeserie','Dayvar'];
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] = ['ALL','Denmark','Sweden','Finland'] ;
t[3] = v[3] ;
v[4] = ['PS','FF','FX','GG','GX','DD','TT','TTHA','TN','TX','TD','RH','QQ','NN','PE'];
t[4] = ['Mslp','U10m','Max U10m','Wind Gust','Max Wind Gust','Wind direction','T2m','T2m, height corr.','Min T2m','Max T2m','Td2m','Rh2m','Q2m','Cloud cover','PE']
v[5] = [0] ;
v[5] = v[5].reverse()
t[5] = v[5]
v[6] = ['ALL','00','03','06','09','12','15','18','21'] ;
t[6] = v[6] ;
mname = ['Type','Period','Station','Selection','Parameter','Level','Initial time']
loc = ['l','l','t','t','t','l','l']
spec_name =[0,1,2,3,6,4,5]

do_debug = false ; ;

help = 'Observation verification comparison'; hide_help = false ;
pdir ='Surface/'
ext='1.png'
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat','Stations']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html','Surface/[4]_[1].xml']
