import React, { useState } from 'react';
import { Card, VStack, HStack, Badge, Button } from '@astryxdesign/core';
import { Brain, Sparkles, BookOpen, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { runAgenticPedagogyPipeline, AgentStep, AiEvaluationResponse } from '../../lib/aiAgentSimulator';

export const AiAgentSandbox: React.FC = () => {
  const [query, setQuery] = useState('Struggling to maintain student engagement in introductory programming modules');
  const [steps, setSteps] = useState<AgentStep[]>([]);
  const [result, setResult] = useState<AiEvaluationResponse | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const presets = [
    'Struggling to maintain student engagement in introductory programming modules',
    'Students have high misconception rates with recursion and call stacks',
    'Low group collaboration and peer code review participation'
  ];

  const handleExecute = async () => {
    if (!query.trim() || isRunning) return;
    setIsRunning(true);
    setResult(null);

    try {
      const res = await runAgenticPedagogyPipeline(query, (updatedSteps) => {
        setSteps(updatedSteps);
      });
      setResult(res);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <Card
      className="glass-cyber-card"
      style={{
        padding: '24px',
        backgroundColor: 'var(--cyber-bg-card)',
        border: '1px solid var(--cyber-border-subtle)'
      }}
    >
      <VStack gap={4}>
        {/* Header */}
        <HStack justify="between" align="center" wrap="wrap" style={{ borderBottom: '1px solid var(--cyber-border-subtle)', paddingBottom: '16px' }}>
          <VStack gap={1}>
            <HStack gap={2} align="center">
              <Brain size={20} color="var(--cyber-violet)" />
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: 'var(--cyber-text-primary)' }}>
                Agentic AI Sandbox: Research-to-Pedagogy Pipeline (SEPICP)
              </h3>
            </HStack>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--cyber-text-secondary)' }}>
              Live simulation of the multi-agent reasoning loop matching instructional challenges with peer-reviewed literature.
            </p>
          </VStack>

          <Badge label="Agentic LLM v1.4" variant="neutral" />
        </HStack>

        {/* Input & Presets */}
        <VStack gap={2}>
          <span style={{ fontSize: '12px', color: 'var(--cyber-text-secondary)', fontWeight: 600 }}>
            Enter Classroom Engagement Challenge or Select a Preset:
          </span>

          <HStack gap={2} wrap="wrap">
            {presets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => setQuery(preset)}
                style={{
                  background: query === preset ? 'rgba(139, 92, 246, 0.15)' : 'var(--cyber-inner-box)',
                  border: query === preset ? '1px solid var(--cyber-violet)' : '1px solid var(--cyber-border-subtle)',
                  borderRadius: '6px',
                  color: query === preset ? 'var(--cyber-violet)' : 'var(--cyber-text-secondary)',
                  padding: '5px 10px',
                  fontSize: '11px',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                {preset.slice(0, 48)}...
              </button>
            ))}
          </HStack>

          <div
            style={{
              display: 'flex',
              gap: '8px',
              backgroundColor: 'var(--cyber-inner-box)',
              borderRadius: '8px',
              border: '1px solid var(--cyber-border-subtle)',
              padding: '6px 12px',
              marginTop: '4px'
            }}
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Students struggling with dynamic programming..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--cyber-text-primary)',
                fontSize: '14px'
              }}
            />
            <Button
              label={isRunning ? 'Orchestrating...' : 'Run Pipeline'}
              variant="primary"
              icon={isRunning ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
              isDisabled={isRunning}
              onClick={handleExecute}
            />
          </div>
        </VStack>

        {/* Live Step Reasoning Display */}
        {steps.length > 0 && (
          <div
            style={{
              backgroundColor: 'var(--cyber-inner-box)',
              borderRadius: '8px',
              border: '1px solid var(--cyber-border-subtle)',
              padding: '16px'
            }}
          >
            <span style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', fontFamily: 'monospace' }}>
              // MULTI-AGENT REASONING PIPELINE TRACE:
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginTop: '10px' }}>
              {steps.map((st, i) => (
                <div
                  key={i}
                  style={{
                    padding: '10px',
                    borderRadius: '6px',
                    backgroundColor: st.status === 'complete' ? 'rgba(16, 185, 129, 0.08)' : st.status === 'in-progress' ? 'rgba(139, 92, 246, 0.12)' : 'transparent',
                    border: `1px solid ${st.status === 'complete' ? '#10B981' : st.status === 'in-progress' ? 'var(--cyber-violet)' : 'var(--cyber-border-subtle)'}`
                  }}
                >
                  <HStack justify="between" align="center">
                    <span style={{ fontSize: '12px', fontWeight: 700, color: st.status === 'complete' ? '#10B981' : st.status === 'in-progress' ? 'var(--cyber-violet)' : 'var(--cyber-text-muted)' }}>
                      Step {i + 1}: {st.name}
                    </span>
                    {st.status === 'complete' && <CheckCircle size={13} color="#10B981" />}
                  </HStack>
                  <div style={{ fontSize: '11px', color: 'var(--cyber-text-secondary)', marginTop: '4px' }}>{st.details}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Synthesized Response */}
        {result && (
          <VStack gap={3}>
            {/* Cognitive Diagnosis */}
            <div
              style={{
                padding: '14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid var(--cyber-violet)'
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--cyber-violet)', fontFamily: 'monospace', textTransform: 'uppercase', fontWeight: 700 }}>
                Cognitive Bottleneck Diagnosed:
              </span>
              <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: 'var(--cyber-text-primary)', fontWeight: 600 }}>
                {result.cognitiveBottleneck}
              </p>
            </div>

            {/* Matched Academic Papers */}
            <VStack gap={2}>
              <span style={{ fontSize: '12px', color: 'var(--cyber-text-secondary)', fontWeight: 600 }}>
                Matched Peer-Reviewed Literature (Zero Hallucination Retrieval):
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
                {result.matchedPapers.map((paper, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--cyber-inner-box)',
                      border: '1px solid var(--cyber-border-subtle)'
                    }}
                  >
                    <HStack gap={1} align="center">
                      <BookOpen size={14} color="var(--cyber-cyan)" />
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--cyber-text-primary)' }}>{paper.title}</span>
                    </HStack>
                    <div style={{ fontSize: '11px', color: 'var(--cyber-text-muted)', marginTop: '2px' }}>
                      {paper.authors} — <em>{paper.venue}</em> ({paper.year})
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--cyber-cyan)', marginTop: '6px' }}>
                      <strong>Key Finding:</strong> {paper.keyInsight}
                    </div>
                  </div>
                ))}
              </div>
            </VStack>

            {/* Actionable Recommendations */}
            <VStack gap={2}>
              <span style={{ fontSize: '12px', color: 'var(--cyber-text-secondary)', fontWeight: 600 }}>
                Actionable Faculty Protocol:
              </span>
              {result.actionableRecommendations.map((rec, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '8px',
                    fontSize: '13px',
                    color: 'var(--cyber-text-primary)',
                    padding: '8px 12px',
                    backgroundColor: 'var(--cyber-inner-box)',
                    borderRadius: '6px',
                    borderLeft: '3px solid #10B981'
                  }}
                >
                  <ArrowRight size={14} color="#10B981" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{rec}</span>
                </div>
              ))}
            </VStack>
          </VStack>
        )}
      </VStack>
    </Card>
  );
};
