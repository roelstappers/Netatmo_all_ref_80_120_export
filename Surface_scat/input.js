

title = 'Surface scatterplots'

framec='lightcoral'

v[0] = ['s']
t[0] = ['Full scatter']
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] = ['ALL','Denmark','Sweden','Finland'] ;
t[3] = v[3] ;
v[4] = ['PS','FF','FX','GG','GX','DD','TT','TTHA','TN','TX','TD','RH','QQ','NN','PE']
t[4] = ['Mslp','U10m','Max U10m','Wind Gust','Max Wind Gust','Wind direction','T2m','T2m, height corr.','Min T2m','Max T2m','Td2m','Rh2m','Q2m','Cloud cover','PE']
v[5] = [0]
v[5] = v[5].reverse()
t[5] = v[5]
v[6] = ['iobs_0km_ref','iobs_0km_sigmao80','iobs_0km_sigmao120']
t[6] = ['iobs_0km_ref','iobs_0km_sigmao80','iobs_0km_sigmao120']
v[7] = ['ALL','00','03','06','09','12','15','18','21'] ;
t[7] = v[7] ;

mname = ['Type','Period','Station','Selection','Parameter','Level','Exp','Initial time']
loc = ['l','t','t','t','l','l','t']
spec_name =[0,1,2,3,7,6,4,5]
do_debug = false ;
pdir ='Surface/'
ext='1.png'
help = 'Observation verification comparison'; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat','Stations']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html','Surface/[4]_[1].xml']
