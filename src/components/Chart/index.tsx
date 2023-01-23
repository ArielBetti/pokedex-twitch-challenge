import { ResponsiveRadar } from '@nivo/radar'

// theme
import theme from './theme';

// types
import { TChartProps } from './types';

// ::
const Chart = ({ data }: TChartProps) => (
  <ResponsiveRadar
    data={data}
    keys={['stat']}
    indexBy="name"
    valueFormat=">-.2f"
    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
    borderColor={{ from: 'color' }}
    gridLabelOffset={36}
    dotSize={10}
    dotColor={{ theme: 'background' }}
    dotBorderWidth={2}
    colors={{ scheme: 'paired' }}
    theme={theme}
    blendMode="multiply"
    motionConfig="wobbly"
  />
)

export default Chart;
