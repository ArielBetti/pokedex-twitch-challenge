import { ResponsiveRadar } from '@nivo/radar'

// theme
import theme from './theme';

// types
import { TChartProps } from './types';

// ::
const Chart = ({ data }: TChartProps) => (
  <ResponsiveRadar
    fillOpacity={0.70}
    data={data}
    keys={['stat']}
    indexBy="name"
    gridLabel={() => <></>}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    borderColor={{ from: 'color' }}
    dotSize={10}
    dotColor={{ theme: 'background' }}
    dotBorderWidth={2}
    colors={{ scheme: 'accent' }}
    theme={theme}
    blendMode="normal"
    motionConfig="wobbly"
    gridShape="linear"
  />
)

export default Chart;
