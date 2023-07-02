import type { Meta, StoryObj } from '@storybook/react'
// import { PhoneDesign } from './PhoneDesign'
import { PhoneDesign } from '../components/PhoneDesign';
import "../assets/css/style.css"
import { TicTacToeDefault } from './TicTacToeDefault';
const meta = {
    title: 'Container/Phone design',
    component: PhoneDesign,
    tags: ['autodocs'],
} satisfies Meta<typeof PhoneDesign>

export default meta;
type Story = StoryObj<typeof meta>;

export const Phone: Story = {
    args: {
        ticTactoeComponent: TicTacToeDefault
    }
}