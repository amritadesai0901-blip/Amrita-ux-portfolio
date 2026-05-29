import React, { useState, useEffect } from 'react'

const projects = [
  {
    id: 1,
    title: 'Redesigning onboarding for a fintech app',
    tag: 'UX Research · Mobile',
    year: '2024',
    color: '#C8D8E8',
    accent: '#2D5F8A',
    size: 'hero',
  },
  {
    id: 2,
    title: 'Building a design system from scratch',
    tag: 'Visual Design · Web',
    year: '2024',
    color: '#C8DDB8',
    accent: '#2D5A1A',
    size: 'small',
  },
  {
    id: 3,
    title: 'Simplifying an enterprise dashboard',
    tag: 'End-to-end · B2B',
    year: '2023',
    color: '#D8C8E8',
    accent: '#4A2D7A',
    size: 'small',
  },
  {
    id: 4,
    title: 'Reducing churn via user research',
    tag: 'UX Research · SaaS',
    year: '2023',
    color: '#E8D4C0',
    accent: '#7A3D1A',
    size: 'small',
  },
  {
    id: 5,
    title: 'Zero-to-one product exploration',
    tag: 'Strategy · Consumer',
    year: '2023',
    color: '#D4D0C8',
    accent: '#3A3830',
    size: 'small',
  },
]

function ProjectCard({ project, isHero }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: isHero ? '1' : undefined,
        gridRow: isHero ? '1 / 3' : undefined,
        background: project.color,
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        border: '0.5px solid rgba(0,0,0,0.06)',
        transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
        transform: hovered ? 'scale(1.015)' : 'scale(1)',
      }}
    >
      {/* Subtle texture overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.35) 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Year pill top-right */}
      <div style={{
        position: 'absolute', top: 14, right: 14,
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(4px)',
        borderRadius: 99,
        padding: '3px 10px',
        fontSize: 11,
        fontFamily: 'var(--font-body)',
        color: 'rgba(0,0,0,0.5)',
        letterSpacing: '0.03em',
      }}>
        {project.year}
      </div>

      {/* Bottom label */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: isHero ? '40px 20px 20px' : '28px 16px 16px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.22) 0%, transparent 100%)',
        transition: 'opacity 0.2s',
      }}>
        <div style={{
          fontSize: 10,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.75)',
          fontFamily: 'var(--font-body)',
          marginBottom: 5,
        }}>
          {project.tag}
        </div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: isHero ? 18 : 13,
          color: '#fff',
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
        }}>
          {project.title}
        </div>
        {hovered && (
          <div style={{
            marginTop: 10,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            fontSize: 11,
            color: 'rgba(255,255,255,0.85)',
            fontFamily: 'var(--font-body)',
            animation: 'fadeUp 0.2s ease',
          }}>
            View case study
            <span style={{ fontSize: 13 }}>→</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 80)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      opacity: loaded ? 1 : 0,
      transition: 'opacity 0.5s ease',
    }}>

      {/* Nav */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 32px 20px',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 16,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          Amrita Dhakras
        </span>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {['Work', 'About', 'Resume'].map(link => (
            <a key={link} href="#" style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: 'var(--text-secondary)',
              letterSpacing: '0.01em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              {link}
            </a>
          ))}
          <a href="mailto:amrita@example.com" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 12,
            color: 'var(--text-primary)',
            background: 'rgba(0,0,0,0.07)',
            padding: '7px 14px',
            borderRadius: 99,
            letterSpacing: '0.01em',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.target.style.background = 'rgba(0,0,0,0.12)'}
          onMouseLeave={e => e.target.style.background = 'rgba(0,0,0,0.07)'}
          >
            Say hello →
          </a>
        </div>
      </nav>

      {/* Bio */}
      <div style={{
        padding: '0 32px 20px',
        borderBottom: '0.5px solid var(--border)',
        marginBottom: 22,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          maxWidth: 440,
          fontWeight: 300,
          fontStyle: 'italic',
        }}>
          <span style={{ fontStyle: 'normal', fontWeight: 400, color: 'var(--text-primary)' }}>UX Designer</span> blending research and visual design —
          building products people actually enjoy using.
        </p>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          color: 'var(--text-muted)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          Pune, India · Open to opportunities
        </span>
      </div>

      {/* Bento Grid */}
      <div style={{
        padding: '0 32px 32px',
        display: 'grid',
        gridTemplateColumns: '5fr 3fr 3fr',
        gridTemplateRows: '260px 180px',
        gap: 10,
      }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} isHero={i === 0} />
        ))}
      </div>

      {/* Footer */}
      <div style={{
        padding: '16px 32px',
        borderTop: '0.5px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)' }}>
          © 2025 Amrita Dhakras
        </span>
        <div style={{ display: 'flex', gap: 20 }}>
          {['LinkedIn', 'Dribbble', 'Email'].map(s => (
            <a key={s} href="#" style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              color: 'var(--text-muted)',
              letterSpacing: '0.03em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
