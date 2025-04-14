import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Cooins – Real-time Currency Conversion'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 64,
          color: 'white',
          padding: '40px',
        }}
      >
        <strong>Cooins</strong>
        <div style={{ fontSize: 40, marginTop: 10 }}>
          Convert currencies instantly
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
