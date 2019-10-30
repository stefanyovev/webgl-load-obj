
   function perspective(){
      return [ 1, 0, 0, 0,
               0, 1, 0, 0,
               0, 0, 1, 1,
               0, 0, 1, 1 ]; }

   function scaling( a, b, c ){
      return [ a, 0, 0, 0,
               0, b, 0, 0,
               0, 0, c, 0,
               0, 0, 0, 1 ]; }

   function translation( a, b, c ){
      return [ 1, 0, 0, 0,
               0, 1, 0, 0,
               0, 0, 1, 0,
               a, b, c, 1 ]; }

   function rotationX( a ){ a *= Math.PI / 90;
      return [ 1,             0,              0, 0,
               0, Math.cos( a ), -Math.sin( a ), 0,
               0, Math.sin( a ),  Math.cos( a ), 0,
               0,             0,              0, 1 ]; }

   function rotationY( a ){ a *= Math.PI / 90;
      return [ Math.cos( a ), 0, Math.sin( a ), 0,
                           0, 1,             0, 0,
              -Math.sin( a ), 0, Math.cos( a ), 0,
                           0, 0,             0, 1 ]; }

   function rotationZ( a ){ a *= Math.PI / 90;
      return [ Math.cos( a ), -Math.sin( a ), 0, 0,
               Math.sin( a ),  Math.cos( a ), 0, 0,
                           0,              0, 1, 0,
                           0,              0, 0, 1 ]; }
                                       
   function mp( m, p ){
      return [
         p[0]*m[0]+p[1]*m[4]+p[2]*m[8]+p[3]*m[12],
         p[0]*m[1]+p[1]*m[5]+p[2]*m[9]+p[3]*m[13],
         p[0]*m[2]+p[1]*m[6]+p[2]*m[10]+p[3]*m[14],
         p[0]*m[3]+p[1]*m[7]+p[2]*m[11]+p[3]*m[15]
         ];}

   function mm( a, b ){
      return [
         a[0]*b[0]+a[4]*b[4]+a[8]*b[8]+a[12]*b[12],
         a[1]*b[0]+a[5]*b[4]+a[9]*b[8]+a[13]*b[12],
         a[2]*b[0]+a[6]*b[4]+a[10]*b[8]+a[14]*b[12],
         a[3]*b[0]+a[7]*b[4]+a[11]*b[8]+a[15]*b[12],
         a[0]*b[1]+a[4]*b[5]+a[8]*b[9]+a[12]*b[13],
         a[1]*b[1]+a[5]*b[5]+a[9]*b[9]+a[13]*b[13],
         a[2]*b[1]+a[6]*b[5]+a[10]*b[9]+a[14]*b[13],
         a[3]*b[1]+a[7]*b[5]+a[11]*b[9]+a[15]*b[13],
         a[0]*b[2]+a[4]*b[6]+a[8]*b[10]+a[12]*b[14],
         a[1]*b[2]+a[5]*b[6]+a[9]*b[10]+a[13]*b[14],
         a[2]*b[2]+a[6]*b[6]+a[10]*b[10]+a[14]*b[14],
         a[3]*b[2]+a[7]*b[6]+a[11]*b[10]+a[15]*b[14],
         a[0]*b[3]+a[4]*b[7]+a[8]*b[11]+a[12]*b[15],
         a[1]*b[3]+a[5]*b[7]+a[9]*b[11]+a[13]*b[15],
         a[2]*b[3]+a[6]*b[7]+a[10]*b[11]+a[14]*b[15],
         a[3]*b[3]+a[7]*b[7]+a[11]*b[11]+a[15]*b[15] ]; }
