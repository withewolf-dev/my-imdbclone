import React, { createContext } from 'react'

export const StoreContext = createContext()

export  const StoreProvider =({children})=> {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const options = ["All", "Movies", "Tv Shows", "celebs", "Companies"];
    const OptionsForApi =["multi","movie","tv","person","company"]

    const category = OptionsForApi[selectedIndex]
    return (
        <StoreContext.Provider value={[selectedIndex,setSelectedIndex,options, category]}>
            {children}
        </StoreContext.Provider>
    )
}
