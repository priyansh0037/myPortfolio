import { createContext, useContext } from "react";

// step 1 create a context ye creeate context bhi objects lene ke kbiul ha jese provifder leta tha 

export const ThemeContext = createContext({
themeMode : "light",
darkTheme : () => {},
lightTheme : ()=>{}

})

// step 2 providing the context
//in love bhiya humney object provider me banya tha but hum yaha object create context me bnaya ha ,and fir theme provider bana kr humeny export kr ddia 

export const ThemeProvider = ThemeContext.Provider

// ab hum yaha bnynge apna ek custom hook jis se hm is sbko use kr paye

export default function useTheme(){
    return useContext(ThemeContext)
}

//humney custom hook me hmara yj=heme context retrun kra dia 
// hm jb jb use context likhte the to hmkjo uske andr hmara context dena pdta tah ab ye problem solve hogyi ha humeny sedha rtrn kra dia na isilie