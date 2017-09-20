// Create
var ab = "welcome";
var ItemType;

var A , B, C, D, E, F, G, H, I, J, K, L, M , N , O , P, Q, R, S, T, U, V, W, X, Y, Z;

// Style Guide = Goed, Netjes

// Waarden veranderen
A = "Welcome", B = "Welcome", C = "Welcome", D = "Welcome", E = "Welcome", F = "Welcome", G = "Welcome", H = "Welcome", I = "Welcome", J = "Welcome",
    K = 1, L = 2, M = 3, N = 4, O = 5, P = true, Q = false, R = true, S = false, T = true,
    U = "Welcome", V = "Welcome", W = true, X = false, Y = 6, Z = 7;

//Show Introspection
var naam = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z ];
for (var counter = 0; counter < 26; counter++){
var currentItem = naam[counter];

    if (typeof (currentItem) === "string") {
        ItemType = "string";
    } else if (typeof (currentItem) === "number") {
        ItemType = "number";
    } else if (typeof (currentItem) === "boolean") {
        ItemType = "boolean";
    } else { ItemType = "Error: Item is Neither A String/Number/Boolean.";}

    console.log("Typeof: " + naam[counter]+ " = " + ItemType );
    console.log("");

}

// Coercion
var AllVars = 26;
var stringsplusnumbers = 17;
var numbersplusbooleans = 14;
var stringsplusbooleans = 17;
var stringnumbers = stringsplusnumbers + 1200;
var varnumbers = AllVars + 1200;

console.log("all variables = " + AllVars);
console.log("strings + numbers = " + stringsplusnumbers);
console.log("numbers + booleans = " + numbersplusbooleans );
console.log("strings + booleans = " + stringsplusbooleans);
console.log("numbers + stringnumbers = " + stringnumbers );
console.log("variable + stringnumbers = " + varnumbers )
console.log("");

// define typeof again
console.log("typeof all variables: " + AllVars + " : " + typeof(varnumbers));
console.log("typeof strings + numbers: " + stringsplusnumbers + " : " + typeof(varnumbers));
console.log("typeof numbers + booleans:" + numbersplusbooleans + " : " + typeof(varnumbers));
console.log("typeof strings + booleans: " + stringsplusbooleans + " : " + typeof(varnumbers));
console.log("typeof numbers + stringnumbers: " + stringnumbers + " : " + typeof(varnumbers));
console.log("typeof variable + stringnumbers: " + varnumbers + " : " + typeof(varnumbers));
console.log("");

