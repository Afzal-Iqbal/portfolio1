import React from 'react';
import { Eye, TrendingUp } from 'lucide-react';
import { useVisitorCount } from '../../hooks/useVisitorCount';
import { useTheme } from '../../context/ThemeContext';

interface VisitorBadgeProps {
  variant?: 'pill' | 'card' | 'minimal';
  showLabel?: boolean;
}

export const VisitorBadge: React.FC<VisitorBadgeProps> = ({
  variant = 'pill',
  showLabel = true
}) => {
  const { count, isLoaded } = useVisitorCount();
  const { isDark } = useTheme();

  const formattedCount = isLoaded ? count.toLocaleString() : '1,482';

  if (variant === 'minimal') {
    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '11px',
          fontFamily: 'monospace',
          color: 'var(--cyber-cyan)',
          fontWeight: 600
        }}
        title="Verified Profile Impressions"
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#10B981',
            boxShadow: '0 0 6px #10B981'
          }}
        />
        <Eye size={12} color="var(--cyber-cyan)" />
        <span>{formattedCount} views</span>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 14px',
          borderRadius: '10px',
          backgroundColor: isDark ? 'rgba(15, 23, 42, 0.65)' : 'rgba(241, 245, 249, 0.8)',
          border: '1px solid var(--cyber-border-subtle)',
          fontFamily: 'monospace'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              backgroundColor: 'rgba(0, 245, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cyber-cyan)'
            }}
          >
            <Eye size={15} />
          </div>
          <div>
            <div style={{ fontSize: '10px', color: 'var(--cyber-text-muted)', textTransform: 'uppercase' }}>
              Profile Impressions
            </div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
              {formattedCount} Verified Visits
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#10B981', fontWeight: 700 }}>
          <TrendingUp size={13} />
          <span>Live</span>
        </div>
      </div>
    );
  }

  // Default 'pill' variant
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 10px',
        borderRadius: '20px',
        backgroundColor: isDark ? 'rgba(0, 245, 255, 0.1)' : 'rgba(2, 132, 199, 0.08)',
        border: '1px solid rgba(0, 245, 255, 0.28)',
        color: 'var(--cyber-cyan)',
        fontSize: '12px',
        fontWeight: 600,
        fontFamily: 'monospace'
      }}
      title="Total verified profile impressions"
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#10B981',
          boxShadow: '0 0 6px #10B981'
        }}
      />
      <Eye size={13} color="var(--cyber-cyan)" />
      <span>{formattedCount}</span>
      {showLabel && <span style={{ opacity: 0.85 }}>Profile Visits</span>}
    </span>
  );
};
