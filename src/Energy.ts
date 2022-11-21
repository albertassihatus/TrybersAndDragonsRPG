export type EnergyType = 'stamina' | 'mana';

interface Energy{
  type_: EnergyType;
  amount: number;
}

export default Energy;