set terminal png
set output "fc_00000000_00000000_Sweden_ALL_TTHA_0_classes.1.png"
set datafile missing "-99"
set title "Frequency  for T2m, height corr. (deg C)\n   Selection: Sweden    176 stations\n  Period: 20190701-20190729\n  Used {00,03,...,21} + 00 01 ... 24" 

set style line 1 lt 0 lw 1 pt 5 # use black thin lines
set style line 2 lt 8 lw 1 pt 1 # use black thicker lines
set grid
set xlabel "classes C)"
set ylabel "Frequency"

 
 set arrow  1 from  -30.00000,graph 0.05 to  -30.00000,graph 0.01 lt -1 lw 2 
 set arrow  2 from  -20.00000,graph 0.05 to  -20.00000,graph 0.01 lt -1 lw 2 
 set arrow  3 from  -15.00000,graph 0.05 to  -15.00000,graph 0.01 lt -1 lw 2 
 set arrow  4 from  -10.00000,graph 0.05 to  -10.00000,graph 0.01 lt -1 lw 2 
 set arrow  5 from  -5.000000,graph 0.05 to  -5.000000,graph 0.01 lt -1 lw 2 
 set arrow  6 from  0.0000000E+00,graph 0.05 to  0.0000000E+00,graph 0.01 lt -1 lw 2 
 set arrow  7 from  5.000000,graph 0.05 to  5.000000,graph 0.01 lt -1 lw 2 
 set arrow  8 from  10.00000,graph 0.05 to  10.00000,graph 0.01 lt -1 lw 2 
 set arrow  9 from  15.00000,graph 0.05 to  15.00000,graph 0.01 lt -1 lw 2 
 set arrow  10 from  20.00000,graph 0.05 to  20.00000,graph 0.01 lt -1 lw 2 
 set arrow  11 from  25.00000,graph 0.05 to  25.00000,graph 0.01 lt -1 lw 2 
 set arrow  12 from  30.00000,graph 0.05 to  30.00000,graph 0.01 lt -1 lw 2
 plot 'c_00000000_00000000_Sweden_ALL_TTHA_0_iobs_0km_ref.scores2' using 1:13 title 'OBS' with linespoints lt 4 lw 2 pt 7,'c_00000000_00000000_Sweden_ALL_TTHA_0_iobs_0km_ref.scores2' using 1:14 title 'iobs_0km_ref' with linespoints lt 1 lw 2 pt 7,'c_00000000_00000000_Sweden_ALL_TTHA_0_iobs_0km_sigmao80.scores2' using 1:14 title 'iobs_0km_sigmao80' with linespoints lt 2 lw 2 pt 7,'c_00000000_00000000_Sweden_ALL_TTHA_0_iobs_0km_sigmao120.scores2' using 1:14 title 'iobs_0km_sigmao120' with linespoints lt 3 lw 2 pt 7