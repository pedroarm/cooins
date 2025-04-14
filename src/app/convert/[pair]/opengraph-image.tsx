import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Cooins – Currency Converter'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OGImage({ params }: { params: { pair: string } }) {
  const [from = 'USD', to = 'EUR'] = params.pair?.split('-to-') || []

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        <div style={{ fontSize: 52, fontWeight: 600, marginBottom: 20 }}>
          Cooins
        </div>
        <div style={{ fontSize: 36, opacity: 0.9 }}>
          Convert <strong>{from.toUpperCase()}</strong> to <strong>{to.toUpperCase()}</strong>
        </div>
        <div style={{ fontSize: 24, marginTop: 20, opacity: 0.7 }}>
          Real-time currency conversion
        </div>
      </div>
    ),
    {
      ...size
    }
  )
}
