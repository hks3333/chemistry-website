ele = ["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminium","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Stronteum","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Cesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Actinium","Thorium","Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium","Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium","Roentgenium","Copernicium","Nihonium","Flerovium","Moscovium","Livermorium","Tsunebunium","Oganesson"]
atm_no = [i for i in range(0,118)]
atm_sym = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","K","Ar","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Uub","Uut","Uuq","Uup","Uuh","Uuh","Uuo"]
atm_mass = [1.007947,4.0026022,6.9412,9.012182,10.8117,12.01078,14.00672,15.99943,18.9984032,20.17976,22.98976928,24.3050,26.9815386,28.08553,30.973762,32.0655,35.4532,39.0983,39.9481,40.0784,44.955912,47.867,50.9415,51.9961,54.938045,55.845,58.933195,58.6934,63.5463,65.409,69.723,72.64,74.92160,78.963,79.904,83.7982,85.46783,87.621,88.90585,91.2242,92.906,95.942,98,101.072,102.905,106.421,107.86822,112.4118,114.818,118.7107,121.7601,127.603,126.904,131.2936,132.9054519,137.327,138.905477,140.1161,140.907652,144.2423,145,150.362,151.9641,157.253,158.925352,162.5001,164.930,167.2593,168.934212,173.043,174.9671,178.49,180.94788,183.84,186.207,190.233,192.217,195.084,196.966569,200.59,204.3833,207.2,208.98040,210,210,220,223,226,227,232.03806,231.03588,238.02891,237,244,243,247,247,251,252,257,258,259,262,261,262,266,264,277,268,271,272,285,284,289,288,292,292,294]
x = ''
for i in range(1,119):
    x += '''<div class="element element{}">
    <div class="element-atomic-details">
        <div class="element-atomic-no">{}</div>
        <div class="element-atomic-mass">{}</div>
    </div>
    <div class="element-atomic-symbol">{}</div>
    <div class="element-atomic-name">{}</div>
</div>\n
'''.format(i,i,round(atm_mass[i-1],5),atm_sym[i-1],ele[i-1])
# print(x)
with open("elements.txt","w") as f:
    f.write(x)
