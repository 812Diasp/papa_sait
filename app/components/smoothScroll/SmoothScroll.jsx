// components/SmoothScroll.tsx
'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // исправлена синтаксическая ошибка
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: true, // лучше включить для мобильных устройств
            touchMultiplier: 2,
            infinite: false, // предотвращаем бесконечный скролл
        })

        let animationFrameId: number

        const raf = (time: number) => {
            lenis.raf(time)
            animationFrameId = requestAnimationFrame(raf)
        }

        animationFrameId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(animationFrameId)
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}