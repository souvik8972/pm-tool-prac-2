import { createSlice } from '@reduxjs/toolkit'



const initialState = [
    { "name": "AbbVie" },
    { "name": "Allergan" },
    { "name": "Belkyra Quiz Module" },
    { "name": "Berlin Chemie" },
    { "name": "Calcium" },
    { "name": "CSL Behring" },
    { "name": "ECIR" },
    { "name": "Fresenius Kabi" },
    { "name": "Internal" },
    { "name": "Luminology" },
    { "name": "Merck" },
    { "name": "NHSc" },
    { "name": "Novartis" },
    { "name": "OM Pharma" },
    { "name": "PTC" },
    { "name": "Real Chemistry" },
    { "name": "Recordati" },
    { "name": "Stemline" },
    { "name": "Takeda_US" },
    { "name": "Training" }
]

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
   
  },
})

// export const { todoAdded, todoToggled } = clientSlice.actions
export default clientSlice.reducer