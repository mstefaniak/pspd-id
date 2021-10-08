import create from 'zustand'
import { UseStore } from 'zustand'
import { persist } from 'zustand/middleware'
import { fetchUserData } from '../lib/api'
import { User } from '../types'
import { IDBStorage } from './idb-storage'

interface IUserStore {
    user: User | null;
    loading: boolean;
    errors: string[];
    lastSyncTimestamp: number;
    signInUser: (username: string, password: string) => Promise<void>
    signOutUser: () => void
}

export const useStore: UseStore<IUserStore> = create(
  persist(
    (set) => ({
      user: null,
      loading: false,
      errors: [],
      lastSyncTimestamp: 0,
      signInUser: async (username: string, password: string) => {
        set({ errors: [], loading: true })
        const user = await fetchUserData(username, password)
        if (user) {
          set({ user: user, lastSyncTimestamp: Date.now(), loading: false })
        } else {
          set({ errors: ['Nieprawidłowy email lub hasło'], loading: false })
        }
      },
      signOutUser: () => set({ user: null }),
    }),
    {
      name: 'pspd-id-storage',
      getStorage: () => IDBStorage,
    }
  )
)
