import os

files = [
    (
        'src/animations/AttentionPrimitives.tsx',
        "import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';\nimport type {CSSProperties, ReactNode} from 'react';",
        "import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';\nimport {TOK, FONT_MONO} from '../styles/tokens';\nimport type {CSSProperties, ReactNode} from 'react';"
    ),
    (
        'src/animations/MotionPrimitives.tsx',
        "import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';\nimport type {CSSProperties, ReactNode} from 'react';",
        "import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';\nimport {TOK} from '../styles/tokens';\nimport type {CSSProperties, ReactNode} from 'react';"
    ),
    (
        'src/animations/DoodlePrimitives.tsx',
        "import {useMemo} from 'react';\nimport {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';",
        "import {useMemo} from 'react';\nimport {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';\nimport {TOK, FONT_HAND} from '../styles/tokens';"
    ),
    (
        'src/animations/DiagramPrimitives.tsx',
        "import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';\nimport {useMemo} from 'react';\nimport type {CSSProperties, ReactNode, SVGProps} from 'react';",
        "import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';\nimport {useMemo} from 'react';\nimport type {CSSProperties, ReactNode, SVGProps} from 'react';\nimport {TOK, FONT_MONO} from '../styles/tokens';"
    ),
]

for path, old, new in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if old not in content:
        print(f'SKIP (pattern not found): {path}')
        continue
    content = content.replace(old, new, 1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'OK: {path}')
