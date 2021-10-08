import { get, set } from 'idb-keyval'                                                                             
                                                                                                                      
export const IDBStorage = {                                                                                                
  getItem: async (name: string): Promise<string | null> => {                                                                                          
    // Exit early on server                                                                                       
    if (typeof indexedDB === 'undefined') {                                                                       
      return null                                                                                                 
    }                                                                                                             
                                                                                                              
    return await get(name) || null                                                                                                                                              
  },                                                                                                                
  setItem: async (name: string, value: string): Promise<void> => {
    set(name, value)                                                                                                
  }                                                                                                                 
}                                                                                                                   