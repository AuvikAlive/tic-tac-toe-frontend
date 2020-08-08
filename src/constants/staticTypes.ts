import { Action } from '@reduxjs/toolkit'

export type Board = Row[]
export type Mark = string
export type Position = [number, number]
export type Row = Square[]
export type Square = null | string

export type Game = {
  board: Board
  mark: Mark
  winner: Square
}

export type Log = {
  entries: Action[]
}

export type InitialState = {
  game: Game
  log: Log
}
