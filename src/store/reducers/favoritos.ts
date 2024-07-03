import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type favoritosState = {
  itens: Produto[]
}

const initialState: favoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoExiste = state.itens.find((p) => p.id === produto.id)

      if (produtoExiste) {
        alert('Item já adicionado')
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== produto.id
        )
        state.itens = []
        favoritosSemProduto.forEach((item) => {
          state.itens.push(item)
        })
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
