const students ={
    '10a':[
            {
                id:1,
                vardas:"Jokubas",
                pavarde:"Kazinskis",
                klase:"10",
                dalykai:[
                    "matematika",
                    "anglu",
                    "lietuviu_k",
                    "biologija",
                    "programavimas"
                ],
                ivertinimai:[9,9,6,7,10]
            },
            {
                id:2,
                vardas:"Algirdas",
                pavarde:"Valentinas",
                klase:"10",
                dalykai:[
                    "matematika",
                    "anglu",
                    "lietuviu_k",
                    "biologija",
                    "programavimas"
                ],
                ivertinimai:[10,7,8,8,9]
            }
    ],
    '9a':[
            {
                id:3,
                vardas:"Jule",
                pavarde:"Boruziene",
                klase:"9",
                dalykai:[
                    "matematika",
                    "anglu",
                    "lietuviu_k",
                    "biologija",
                    "programavimas"
                ],
                ivertinimai:[9,10,10,8,10]
            },
            {
                id:4,
                vardas:"Robertas",
                pavarde:"Galinis",
                klase:"9",
                dalykai:[
                    "matematika",
                    "anglu",
                    "lietuviu_k",
                    "biologija",
                    "programavimas"
                ],
                ivertinimai:[5,4,3,4,4]
            }
    ],
    '8a':[
            {
                id:5,
                vardas:"Tomas",
                pavarde:"Siugzdinis",
                klase:"8",
                dalykai:[
                    "matematika",
                    "anglu",
                    "lietuviu_k",
                    "biologija",
                    "programavimas"
                ],
                ivertinimai:[7,9,7,8,10]
            },
            {
                id:6,
                vardas:"Lukas",
                pavarde:"Skernys",
                klase:"8",
                dalykai:[
                    "matematika",
                    "anglu",
                    "lietuviu_k",
                    "biologija",
                    "programavimas"
                ],
                ivertinimai:[10,10,10,10,10]
            }
    ],
    '7a':[
            {
            id:7,
            vardas:"Kazys",
            pavarde:"Kazlauskas",
            klase:"7",
            dalykai:[
                "matematika",
                "anglu",
                "lietuviu_k",
                "biologija",
                "programavimas"
            ],
            ivertinimai:[5,5,5,5,5]
            },
            {            
            id:8,
            vardas:"Domas",
            pavarde:"Valentinas",
            klase:"7",
            dalykai:[
                "matematika",
                "anglu",
                "lietuviu_k",
                "biologija",
                "programavimas"
            ],
            ivertinimai:[8,9,8,8,9]
            }
    ],
    '6a':[
        {
            id:9,
            vardas:"Jonas",
            pavarde:"Basanavicius",
            klase:"6",
            dalykai:[
                "matematika",
                "anglu",
                "lietuviu_k",
                "biologija",
                "programavimas"
            ],
            ivertinimai:[8,10,6,9,9]
        },
        {
            id:10,
            vardas:"Balys",
            pavarde:"Sruoga",
            klase:"6",
            dalykai:[
                "matematika",
                "anglu",
                "lietuviu_k",
                "biologija",
                "programavimas"
            ],
            ivertinimai:[5,4,10,9,4]
        }
    ]
}

let vid=[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];

    //cia susumuoja ivertinimus, tada dalina, is kiek yra dalyku, siuo atveju - 5, viena problema su JS, man neleidzia "students["10a"]" pakeisti i "students[i] ir man tokiu atveju leistu naudoti visas klases, as turiu specifikuoti kuri klase, as naudojau "let klases =["10a", "9a", "8a", "7a", "6a"]""

    for(let i=0;i<2;i++){
        for(let j=0;j<5;j++){
          vid[i]+=students["10a"][i].ivertinimai[j];   
        }
    }    
    for(let i=0;i<2;i++){
        for(let j=0;j<5;j++){
          vid[i+2]+=students["9a"][i].ivertinimai[j];   
        }
    }
    for(let i=0;i<2;i++){
        for(let j=0;j<5;j++){
          vid[i+4]+=students["8a"][i].ivertinimai[j];   
        }
    }
    for(let i=0;i<2;i++){
        for(let j=0;j<5;j++){
          vid[i+6]+=students["7a"][i].ivertinimai[j];   
        }
    }
    for(let i=0;i<2;i++){
        for(let j=0;j<5;j++){
          vid[i+8]+=students["6a"][i].ivertinimai[j];   
        }
    }
    //cia dalina susumuotus ivertinimus ir gauna vidurki
    for(let i=0;i<10;i++){
       vid[i]/=5; 
    }
    //spausdinimas
    for(let i=0;i<2;i++){
            console.log(students["10a"][i].vardas + " " + students["10a"][i].pavarde);
            console.log("klase: " + students["10a"][i].klase);
            console.log("-----------");
            for(let j=0;j<4;j++){
            console.log(students["10a"][i].dalykai[j] + ": "+ students["10a"][i].ivertinimai[j]);
        }
        console.log("Vidurkis: " + vid[i] + "\n");
}
    for(let i=0;i<2;i++){
        console.log(students["9a"][i].vardas + " " + students["9a"][i].pavarde);
        console.log("klase: " + students["9a"][i].klase);
        console.log("-----------");
        for(let j=0;j<4;j++){
        console.log(students["9a"][i].dalykai[j] + ": "+ students["9a"][i].ivertinimai[j]);
    }
    console.log("Vidurkis: " + vid[i+2] + "\n");
}
    for(let i=0;i<2;i++){
        console.log(students["8a"][i].vardas + " " + students["8a"][i].pavarde);
        console.log("klase: " + students["8a"][i].klase);
        console.log("-----------");
        for(let j=0;j<4;j++){
        console.log(students["8a"][i].dalykai[j] + ": "+ students["8a"][i].ivertinimai[j]);
    }
    console.log("Vidurkis: " + vid[i+2] + "\n");
}
    for(let i=0;i<2;i++){
        console.log(students["7a"][i].vardas + " " + students["7a"][i].pavarde);
        console.log("klase: " + students["7a"][i].klase);
        console.log("-----------");
        for(let j=0;j<4;j++){
        console.log(students["7a"][i].dalykai[j] + ": "+ students["7a"][i].ivertinimai[j]);
    }
    console.log("Vidurkis: " + vid[i+4] + "\n");
}
    for(let i=0;i<2;i++){
    console.log(students["6a"][i].vardas + " " + students["6a"][i].pavarde);
    console.log("klase: " + students["6a"][i].klase);
    console.log("-----------");
    for(let j=0;j<4;j++){
    console.log(students["6a"][i].dalykai[j] + ": "+ students["6a"][i].ivertinimai[j]);
}
console.log("Vidurkis: " + vid[i+6] + "\n");
}

