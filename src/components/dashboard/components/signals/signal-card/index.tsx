import { GradientCard } from '@/components/ui/gradient-card';
import { SignalHeader } from './header';
import { SignalMetrics } from './metrics';
import { SignalFooter } from './footer';
import type { SignalCardProps } from './types';

const WatermarkPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-3 text-2xl font-bold tracking-widest opacity-[0.04] ">

          <img src="/assets/favicons/apple-touch-icon.png" alt="Logo" className="h-9" />
          Pistol Signals
        </div>
      </div>
    </div>
  )
}

export function SignalCard(props: SignalCardProps) {
  return (
    <GradientCard>
      <div className="relative p-6 overflow-hidden">
        <WatermarkPattern />
        <div className="relative z-10">
          <SignalHeader
            coin={props.coin}
            symbol={props.symbol}
            image={props.image}
            timestamp={props.timestamp}
            type={props.signalType}
          />

          <SignalMetrics
            entry={props.entry}
            exit={props.exit}
          />

          <SignalFooter
            stopLoss={props.stopLoss}
            leverage={props.leverage}
            type={props.signalType}
          />
        </div>
      </div>

    </GradientCard>
  );
}