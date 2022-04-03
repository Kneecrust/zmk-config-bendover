                nav_layer {
                    // -----------------------------------------------------------------------------------------
                    //        |  Q  |  W  |  F  |  P  |  B  |                   |  J  |  L   |  U  |  Y  |  ;  | 
                    // | SHIFT|  A  |  R  |  S  |  T  |  G  |                   |  M  |  N   |  E  |  I  |  O  |  DEL  |
                    //        |  Z  |  X  |  C  |  D  |  V  |                   |  K  |  H   |  ,  |  .  |  /  | 
                    //                                | SPC | ENT |       | ESC | BKSP|  


                    bindings = <
                        &
                        trans & trans & trans & trans & trans & trans & kp PG_DN & kp UP & kp PG_UP & trans &
                        kp LSHFT & trans & kp LCTRL & kp LALT & kp LWIN & trans & kp TAB & kp LEFT & kp DOWN & kp RIGHT I & trans & kp DEL &
                        trans & trans & trans & trans & trans & kp CAPS & kp HOME & kp END & kp INS & trans &
                        kp SPACE & kp RET & kp BKSP >
                    ;
                };


                num_layer {
                    // -----------------------------------------------------------------------------------------
                    //        |     |     |     |     |     |                   |  *  |  7   |  8  |  9  |  +  | 
                    // | SHIFT| SPC | CTL | ALT | WIN |     |                   |  -  |  0   |  1  |  2  |  3  |  =  |
                    //        |     |     |     |     |     |                   |  /  |  4   |  5  |  6  |  /  | 
                    //                                | SPC | ENT |       | ESC | BKSP| 

                    bindings = <
                        &
                        trans & trans & trans & trans & trans & kp STAR & kp N7 & kp N8 & kp N9 & kp PLUS &
                        kp LSHFT & kp SPACE & kp LCTRL & kp LALT & kp LWIN & trans & kp MINUS & kp N0 & kp N1 & kp N2 & kp N3 & kp EQUAL &
                        trans & trans & trans & trans & trans & kp FSLH & kp N4 & kp N5 & kp N6 & kp FSLH &
                        kp RET & kp ESC & kp BKSP >
                    ;
                };


                sym_layer {
                    // -----------------------------------------------------------------------------------------
                    //        |  Q  |  W  |  F  |  P  |  B  |                   |  J  |  L   |  U  |  Y  |  ;  | 
                    // | SHIFT|  A  |  R  |  S  |  T  |  G  |                   |  M  |  N   |  E  |  I  |  O  |  SHIFT  |
                    //        |  Z  |  X  |  C  |  D  |  V  |                   |  K  |  H   |  ,  |  .  |  /  | 
                    //                                | SPC | ENT |       | ESC | BKSP| 

                    bindings = <
                        &
                        trans & trans & trans & trans & trans & kp PIPE & kp AMPS & kp STAR & kp LPAR & kp TILDE &
                        kp LSHFT & kp RET & kp LCTRL & kp LALT & kp LWIN & trans & kp UNDER & kp RPAR & kp EXCL & kp AT & kp HASH & kp EQUAL &
                        trans & trans & kp C & trans & trans & kp FSLH & kp DLLR & kp PRCNT & kp CARET & kp GRAVE &
                        kp SPACE & kp ESC & kp BKSP >
                    ;
                };


                fun_layer {
                    // -----------------------------------------------------------------------------------------
                    //        |  Q  |  W  |  F  |  P  |  B  |                   |  J  |  L   |  U  |  Y  |  ;  | 
                    // | SHIFT|  A  |  R  |  S  |  T  |  G  |                   |  M  |  N   |  E  |  I  |  O  |  SHIFT  |
                    //        |  Z  |  X  |  C  |  D  |  V  |                   |  K  |  H   |  ,  |  .  |  /  | 
                    //                                | SPC | ENT |       | ESC | BKSP| 

                    bindings = <
                        &
                        kp F8 & kp F7 & kp F6 & kp F5 & trans & trans & trans & trans & trans & trans &
                        kp PSCRN & kp F3 & kp F2 & kp F1 & kp F4 & trans & trans & kp RWIN & kp RALT & kp RCTRL & trans & kp LSHFT &
                        kp F12 & kp F11 & kp F10 & kp F9 & trans & trans & trans & trans & trans & trans &
                        kp SPACE & kp RET & kp ESC & kp BKSP >
                    ;
                };