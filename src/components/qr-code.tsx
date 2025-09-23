
'use client';

import React from 'react';
import { QRCodeSVG as QRCodeReact } from 'qrcode.react';

interface QRCodeProps {
  value: string;
}

export function QRCode({ value }: QRCodeProps) {
  return <QRCodeReact value={value} />;
}
