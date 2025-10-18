import { useState } from 'react';

function GenerationProgress({ generaciones }) {
  const [currentGenIndex, setCurrentGenIndex] = useState(0);

  if (!generaciones || generaciones.length === 0) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%',
        color: '#e0e6f0',
        fontStyle: 'italic',
        fontSize: '1rem'
      }}>
        Aquí se mostrará el progreso de generaciones
      </div>
    );
  }

  const gen = generaciones[currentGenIndex];

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      padding: '0.75rem',
      gap: '0.5rem'
    }}>
      
      {/* Navigation Header - Compact */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: '#0d1320', 
        padding: '0.5rem 0.75rem', 
        borderRadius: '6px',
        flexShrink: 0
      }}>
        <button 
          onClick={() => setCurrentGenIndex(Math.max(0, currentGenIndex - 1))}
          disabled={currentGenIndex === 0}
          style={{ 
            padding: '0.4rem 0.8rem', 
            background: currentGenIndex === 0 ? '#374151' : '#60a5fa', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px',
            fontSize: '0.8rem',
            cursor: currentGenIndex === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          ◀
        </button>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1rem', fontWeight: '700', color: '#60a5fa' }}>
            Gen {gen.numero} / {generaciones.length}
          </div>
          <div style={{ fontSize: '0.85rem', color: '#fbbf24', marginTop: '0.2rem' }}>
            Apt: {gen.mejorAptitud} | Suma: {gen.mejorSuma}
          </div>
        </div>
        
        <button 
          onClick={() => setCurrentGenIndex(Math.min(generaciones.length - 1, currentGenIndex + 1))}
          disabled={currentGenIndex === generaciones.length - 1}
          style={{ 
            padding: '0.4rem 0.8rem', 
            background: currentGenIndex === generaciones.length - 1 ? '#374151' : '#60a5fa', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px',
            fontSize: '0.8rem',
            cursor: currentGenIndex === generaciones.length - 1 ? 'not-allowed' : 'pointer'
          }}
        >
          ▶
        </button>
      </div>

    
      <div style={{ 
        background: '#0d1320', 
        borderRadius: '6px', 
        padding: '0.5rem',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ 
          fontSize: '0.9rem', 
          color: '#e0e6f0', 
          marginBottom: '0.5rem',
          textAlign: 'center',
          flexShrink: 0
        }}>
          Población ({gen.individuos.length} individuos)
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '0.4rem',
          width: '100%'
        }}>
          {gen.individuos.map((ind, i) => (
            <div 
              key={i} 
              style={{ 
                padding: '0.4rem', 
                borderRadius: '4px', 
                background: ind.aptitud === gen.mejorAptitud ? '#1e3a1f' : '#1e293b',
                border: ind.aptitud === gen.mejorAptitud ? '1px solid #4ade80' : '1px solid #374151',
                fontSize: '0.7rem',
                lineHeight: '1.2'
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '-0.1rem',
                color: ind.aptitud === gen.mejorAptitud ? '#4ade80' : '#e0e6f0'
              }}>
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                  Ind {i + 1}{ind.aptitud === gen.mejorAptitud && ' ⭐'}
                </span>
                <span style={{ color: ind.aptitud === gen.mejorAptitud ? '#4ade80' : '#60a5fa', fontSize: '0.9rem' }}>
                  Apt: {ind.aptitud}
                </span>
              </div>
              <div style={{ 
                color: ind.aptitud === gen.mejorAptitud ? '#86efac' : '#cbd5e1',
                fontSize: '0.8rem'
              }}>
                [{ind.subconjunto.join(', ')}]
              </div>
            </div>
          ))}
        </div>
      </div>

    
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '0.2rem',
        flexShrink: 0,
        padding: '0.3rem'
      }}>
        {generaciones.slice(0, 20).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentGenIndex(idx)}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: idx === currentGenIndex ? '#60a5fa' : '#374151',
              border: 'none',
              cursor: 'pointer',
              padding: 0
            }}
          />
        ))}
        {generaciones.length > 20 && (
          <span style={{ fontSize: '0.6rem', color: '#9ca3af', marginLeft: '0.2rem' }}>
            +{generaciones.length - 20}
          </span>
        )}
      </div>
    </div>
  );
}

export default GenerationProgress;