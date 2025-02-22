const arrayDeObjetos = [
    {
        name: "Aciclovir 250 mg Polvo para solución para perfusión",
        presentation: "Vial 250 mg",
        type: "Antiviral",
        dose: "5-10 mg/kg c/ 8h",
        preparation: "Reconstituir con 10cc de agua para inyección o SSF. Tras reconstitución, SSF, SG5% o RL. No superar los 5mg/ml",
        appearance: "Solución clara e incolora.",
        administrationTime: "No menos de 60 minutos",
        storage: "Una vez diluido, permanece estable 12h a temperatura ambiente. No refrigerar por riesgo de cristalización.",
        technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/65256/FT_65256.pdf"
    },
    {
        name: "Amikacina 500mg/2ml Solución inyectable y para perfusión",
        presentation: "Vial 500 mg en 2 ml",
        type: "Aminoglucósido",
        dose: "15 mg/kg/día",
        preparation: "SSF o SG5%. 5 mg/ml",
        appearance: "Transparente o ligeramente amarillenta.",
        administrationTime: "30-60 minutos",
        storage: "Una vez diluido, permanece estable 24h a temperatura ambiente.",
        technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/57012/FT_57012.pdf"
    },
    {
        name: "Amoxicilina 1 g / Ac. clavulánico 200 mg",
        presentation: "Vial 1000mg/200mg",
        type: "Betalactámico",
        dose: "1000mg/200mg c/8h",
        preparation: "Se recomienda reconstituir con 20cc de agua para inyección y, posteriormente, administrar en bolo o añadir a alguno de los siguientes disolventes: agua para inyección, SSF o RL.",
        appearance: "Incoloro o color paja pálido.",
        administrationTime: "Directa en 3 min o diluido en 30 minutos",
        storage: "El producto reconstituido con 20cc de agua para inyección, es estable a temperatura ambiente durante 20 minutos. Una vez añadido a la bolsa de perfusión, es estable en agua para inyección y SSF, durante 3 horas a temperatura ambiente y durante 6 horas en nevera. En RL es estable 2 horas a temperatura ambiente.",
        technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/65131/FichaTecnica_65131.html.pdf"
    },
    {
        name: "Amoxicilina 2 g / Ac. clavulánico 200 mg",
        presentation: "Vial 1000mg/200mg",
        type: "Betalactámico",
        dose: "2000mg/200mg c/8h",
        preparation: "Se recomienda reconstituir con 20cc de agua para inyección y, posteriormente, administrar en bolo o añadir a alguno de los siguientes disolventes: agua para inyección, SSF o RL.",
        appearance: "Incoloro o color paja pálido.",
        administrationTime: "30 minutos.",
        storage: "El producto reconstituido con 20cc de agua para inyección, es estable a temperatura ambiente durante 20 minutos. Una vez añadido a la bolsa de perfusión, es estable en agua para inyección y SSF, durante 3 horas a temperatura ambiente y durante 6 horas en nevera. En RL es estable 2 horas a temperatura ambiente.",
        technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/65679/FichaTecnica_65679.html.pdf"
    },
    {
        name: "Ampicilina 1 gr Polvo y disolvente para solución inyectable y para perfusión",
        presentation: "Vial 1 gr",
        type: "Betalactámico",
        dose: "500 mg/6h",
        preparation: "Reconstituir con 4 cc de agua para inyección (presente en la caja). Después, añadir a 50-100 cc de SSF o SG.",
        appearance: "No hay datos",
        administrationTime: "30-60 minutos",
        storage: "El producto reconstituido, debe ser diluido inmediatamente. Una vez diluido, es estable 24 horas en nevera y 8 horas a temperatura ambiente.",
        technicalSheet: "https://cima.aemps.es/cima/pdfs/es/p/89095/P_89095.html.pdf"
    },              
    {
        name: "Anfotericina B 50 mg (Ambisome) Polvo para dispersión para perfusión",
        presentation: "Vial 50 mg",
        type: "Antimicótico poliénico",
        dose: "1-5 mg/kg/día",
        preparation: "Se recomienda reconstituir cada vial con 12cc de agua para inyección para que la concentración sea de 4mg/ml. Tras la reconstitución, diluir en suero glucosado (5%, 10% o 20%), para que la concentración final sea de entre 0,2 y 2 mg/ml. Utilizar filtro de 5 micras incluido en la caja.",
        appearance: "Solución amarilla translúcida.",
        administrationTime: "30-60 minutos. Lavar vía con SG5% antes y después de la administración, para que el fármaco no entre en contacto con SSF.",
        storage: "El producto reconstituido con agua para inyección, permanece estable 24 horas a temperatura ambiente o 7 días en nevera. La dilución en SG5% es estable 72 horas a temperatura ambienye a concentraciones entre 0,5 y 2 mg/ml. A menor concentración, es estable a temperatura ambiente 24 horas. La dilución en SG5% es estable 7 días en nevera a concentraciones entre 0,5 y 2 mg/ml. A menor concentración, es estable en nevera 4 días. Con SG10% y SG20%, a concentraciones de 2mg/ml, es estable 48 horas en nevera y 72 a temperatura ambiente.",
        technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/61117/FichaTecnica_61117.html.pdf"
    },
    
];
for(let i = 0; i < arrayDeObjetos.length; i++){
    console.log(arrayDeObjetos[i]);
}

for(let i = 0; i < arrayDeObjetos.length; i++){
    console.log("=====================================");
    console.log("name: " + arrayDeObjetos[i].name);
    console.log("presentation: " + arrayDeObjetos[i].presentation);
    console.log("type: " + arrayDeObjetos[i].type);
    console.log("dose " + arrayDeObjetos[i].dose);    
    console.log("preparation: " + arrayDeObjetos[i].preparation);
    console.log("administrationTime: " + arrayDeObjetos[i].administrationTime);
    console.log("storage: " + arrayDeObjetos[i].storage);
    console.log("technicalSheet: " + arrayDeObjetos[i].technicalSheet);

}