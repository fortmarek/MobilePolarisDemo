import React, {useState, useEffect} from 'react';

import {Tooltip} from './Tooltip';

interface Props {
  color: string;
  name: string;
}

export function ColorRow({color, name}: Props) {
  const [showToast, setShowToast] = useState(false);
  const [hovering, setHovering] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(name);
    setShowToast(true);
  };

  useEffect(() => {
    if (!showToast) {
      return;
    }
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <tr>
      <td>
        <div className="flex-row">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={copyToClipboard}
            className={`color-box ${hovering ? 'hovering' : ''}`}
            style={{
              backgroundColor: color,
            }}
          />
          <p className="color-name">
            <code>
              {name}
              <Tooltip title="Copied to clipboard" show={showToast} />
            </code>
            <a onClick={copyToClipboard}>
              <svg fill="currentColor" viewBox="-2  18 18">
                <path d="M8 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1s0 .997.996 1h2.004a2 2 0 0 1 2 2v7.586a2 2 0 0 1-.586 1.414l-2.414 2.414a2 2 0 0 1-1.414.586h-7.586a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2h2.004c.996-.003.996-1 .996-1zm5 3v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1h-2v10h7v-2a1 1 0 0 1 1-1h2v-7h-2z" />
              </svg>
            </a>
          </p>
        </div>
      </td>
      <td width="200">
        <p className="color-value">{color}</p>
      </td>
    </tr>
  );
}
