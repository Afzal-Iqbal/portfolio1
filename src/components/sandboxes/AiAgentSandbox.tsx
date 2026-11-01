import React, { useState } from 'react';
import { Card, VStack, HStack, Badge, Button } from '@astryxdesign/core';
import { Brain, Sparkles, BookOpen, CheckCircle, ArrowRight, BookCheck, Loader2 } from 'lucide-react';
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
        padding: '28px',
        backgroundColor: 'rgba(11, 15, 25, 0.95)',
        border: '1px solid rgba(139, 92, 246, 0.25)'
      }}
    >
      <VStack gap={4}>
        {/* Header */}
        <HStack justify="between" align="center" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '16px' }}>
          <VStack gap={1}>
            <HStack gap={2} align="center">
              <Brain size={20} color="#C084FC" />
              <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: '#F8FAFC' }}>
                Agentic AI Sandbox: Research-to-Pedagogy Pipeline (SEPICP)
              </h3>
            </HStack>
            <p style={{ margin: 0, fontSize: '13px', color: '#94A3B8' }}>
              Live simulation of the multi-agent LLM reasoning pipeline matching instructional challenges with peer-reviewed educational literature.
            </p>
          </VStack>

          <Badge label="Agentic LLM v1.4" variant="neutral" />
        </HStack>

        {/* Input & Presets */}
        <VStack gap={2}>
          <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>
            Enter Classroom Engagement Challenge or Select a Preset:
          </span>

          <HStack gap={2} wrap="wrap">
            {presets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => setQuery(preset)}
                style={{
                  background: query === preset ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: query === preset ? '1px solid #8B5CF6' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  color: query === preset ? '#C084FC' : '#94A3B8',
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
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              borderRadius: '8px',
              border: '1px solid rgba(139, 92, 246, 0.3)',
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
                color: '#F8FAFC',
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
              backgroundColor: '#070A10',
              borderRadius: '8px',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              padding: '16px'
            }}
          >
            <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'monospace' }}>
              // MULTI-AGENT REASONING PIPELINE TRACE:
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginTop: '10px' }}>
              {steps.map((st, i) => (
                <div
                  key={i}
                  style={{
                    padding: '10px',
                    borderRadius: '6px',
                    backgroundColor: st.status === 'complete' ? 'rgba(16, 185, 129, 0.08)' : st.status === 'in-progress' ? 'rgba(139, 92, 246, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${st.status === 'complete' ? '#10B981' : st.status === 'in-progress' ? '#8B5CF6' : 'rgba(255, 255, 255, 0.06)'}`
                  }}
                >
                  <HStack justify="between" align="center">
                    <span style={{ fontSize: '12px', fontWeight: 600, color: st.status === 'complete' ? '#34D399' : st.status === 'in-progress' ? '#C084FC' : '#64748B' }}>
                      Step {i + 1}: {st.name}
                    </span>
                    {st.status === 'complete' && <CheckCircle size={13} color="#10B981" />}
                  </HStack>
                  <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '4px' }}>{st.details}</div>
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
                border: '1px solid rgba(139, 92, 246, 0.3)'
              }}
            >
              <span style={{ fontSize: '11px', color: '#C084FC', fontFamily: 'monospace', textTransform: 'uppercase' }}>
                Cognitive Bottleneck Diagnosed:
              </span>
              <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#F1F5F9', fontWeight: 500 }}>
                {result.cognitiveBottleneck}
              </p>
            </div>

            {/* Matched Academic Papers */}
            <VStack gap={2}>
              <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>
                Matched Peer-Reviewed Literature (Zero Hallucination Retrieval):
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                {result.matchedPapers.map((paper, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <HStack gap={1} align="center">
                      <BookOpen size={14} color="#00F5FF" />
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#E2E8F0' }}>{paper.title}</span>
                    </HStack>
                    <div style={{ fontSize: '11px', color: '#64748B', marginTop: '2px' }}>
                      {paper.authors} — <em>{paper.venue}</em> ({paper.year})
                    </div>
                    <div style={{ fontSize: '12px', color: '#38BDF8', marginTop: '6px' }}>
                      <strong>Key Finding:</strong> {paper.keyInsight}
                    </div>
                  </div>
                ))}
              </div>
            </VStack>

            {/* Actionable Recommendations */}
            <VStack gap={2}>
              <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>
                Actionable Faculty Protocol:
              </span>
              {result.actionableRecommendations.map((rec, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '8px',
                    fontSize: '13px',
                    color: '#CBD5E1',
                    padding: '8px 12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '6px',
                    borderLeft: '2px solid #10B981'
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
