import React, { useState, useRef, useEffect } from 'react';
import { Card, HStack, VStack, Badge, Button } from '@astryxdesign/core';
import { Terminal, CornerDownLeft, Trash2, Maximize2, Minimize2 } from 'lucide-react';
import { executeTerminalCommand, CommandOutput } from '../../lib/terminalCommands';

export const TerminalWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      response: `[INITIALIZED NODE CONNECTION: afzal@ned-university:~$]
Type "help" to query Afzal's credentials, smart contracts, and agentic AI pipelines.`,
      timestamp: 'system'
    }
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleRun = (cmd: string) => {
    if (!cmd.trim()) return;
    if (cmd.trim().toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const res = executeTerminalCommand(cmd);
    const newEntry: CommandOutput = {
      command: cmd,
      response: res,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };
    setHistory((prev) => [...prev, newEntry]);
    setInput('');
  };

  const quickCommands = ['help', 'bio', 'skills', 'projects', 'scholarship', 'contact'];

  return (
    <Card
      className="glass-cyber-card"
      style={{
        padding: '16px',
        width: '100%',
        maxWidth: isExpanded ? '100%' : '650px',
        backgroundColor: 'rgba(8, 11, 18, 0.95)',
        border: '1px solid rgba(0, 245, 255, 0.25)',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)'
      }}
    >
      <VStack gap={3}>
        {/* Terminal Header */}
        <HStack justify="between" align="center" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '8px' }}>
          <HStack gap={2} align="center">
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
            </div>
            <HStack gap={1} align="center" style={{ marginLeft: '6px' }}>
              <Terminal size={14} color="#00F5FF" />
              <span style={{ fontSize: '12px', color: '#94A3B8', fontFamily: 'monospace', fontWeight: 600 }}>
                afzal@web3-ai-node: ~
              </span>
            </HStack>
          </HStack>

          <HStack gap={2} align="center">
            <Badge label="Interactive Shell" variant="neutral" style={{ fontSize: '10px' }} />
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '2px' }}
              title={isExpanded ? 'Minimize' : 'Maximize'}
            >
              {isExpanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            </button>
            <button
              onClick={() => setHistory([])}
              style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '2px' }}
              title="Clear terminal"
            >
              <Trash2 size={13} />
            </button>
          </HStack>
        </HStack>

        {/* Output Screen */}
        <div
          style={{
            maxHeight: isExpanded ? '400px' : '200px',
            minHeight: '130px',
            overflowY: 'auto',
            fontFamily: 'Fira Code, monospace',
            fontSize: '13px',
            lineHeight: 1.5,
            color: '#E2E8F0',
            padding: '4px 0'
          }}
        >
          {history.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '12px' }}>
              <div style={{ color: '#00F5FF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#10B981' }}>❯</span>
                <span style={{ fontWeight: 600 }}>{item.command}</span>
                {item.timestamp !== 'system' && (
                  <span style={{ fontSize: '10px', color: '#64748B', marginLeft: 'auto' }}>
                    {item.timestamp}
                  </span>
                )}
              </div>
              <pre
                style={{
                  margin: '4px 0 0 14px',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  color: '#CBD5E1',
                  fontFamily: 'inherit'
                }}
              >
                {item.response}
              </pre>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Field */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRun(input);
          }}
        >
          <HStack
            align="center"
            style={{
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              borderRadius: '8px',
              border: '1px solid rgba(0, 245, 255, 0.2)',
              padding: '6px 12px'
            }}
          >
            <span style={{ color: '#00F5FF', fontWeight: 700, fontFamily: 'monospace' }}>❯</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type 'help', 'skills', 'projects', or 'bio'..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#F8FAFC',
                fontFamily: 'Fira Code, monospace',
                fontSize: '13px',
                paddingLeft: '8px'
              }}
            />
            <button
              type="submit"
              style={{
                background: 'rgba(0, 245, 255, 0.15)',
                border: 'none',
                color: '#00F5FF',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <CornerDownLeft size={13} />
            </button>
          </HStack>
        </form>

        {/* Quick Command Chips */}
        <HStack gap={1} wrap="wrap" align="center" style={{ paddingTop: '2px' }}>
          <span style={{ fontSize: '11px', color: '#64748B', marginRight: '4px' }}>Quick commands:</span>
          {quickCommands.map((q) => (
            <button
              key={q}
              onClick={() => handleRun(q)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                color: '#94A3B8',
                fontSize: '11px',
                fontFamily: 'monospace',
                padding: '2px 8px',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00F5FF';
                e.currentTarget.style.color = '#00F5FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#94A3B8';
              }}
            >
              {q}
            </button>
          ))}
        </HStack>
      </VStack>
    </Card>
  );
};
