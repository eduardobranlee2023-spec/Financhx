'use client'
import React from 'react'
import { motion } from 'motion/react'
import { NumberTicker } from '@/components/NumberTicker'

const formatNumber = (value: number) =>
  new Intl.NumberFormat('es-AR').format(value)

export const StatsBanner = () => {
  return (
    <section className="overflow-hidden border-y border-[#292929] bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            Conciliación con una lectura clara de cada movimiento.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-[#C5C5C5] sm:text-lg"
          >
            Un vistazo al tipo de información que reúne Financhx Reconcile.
            Estos valores son ilustrativos y no corresponden a operaciones reales.
          </motion.p>
        </div>

        <div className="space-y-6">
          {/* Hero Stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative w-full overflow-hidden rounded-3xl border border-[#303030] bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#050505] p-10 text-center text-white shadow-2xl sm:p-16"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

            <div className="relative z-10">
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
                className="mb-3 block bg-linear-to-r from-white to-neutral-400 bg-clip-text text-7xl font-semibold text-transparent md:text-8xl"
              >
                <NumberTicker value={1428} format={formatNumber} />
              </motion.span>
              <p className="text-lg font-medium text-[#E5E5E5] sm:text-2xl">
                Movimientos conciliados en este escenario de muestra
              </p>
            </div>
          </motion.div>

          {/* Secondary Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatBox number={1445} label="Movimientos incluidos" delay={0.3} />
            <StatBox number={17} label="Casos para revisión" delay={0.4} />
            <StatBox number={3} label="Diferencias detectadas" delay={0.5} />
          </div>
        </div>
      </div>
    </section>
  )
}

const StatBox = ({
  number,
  label,
  delay,
}: {
  number: number
  label: string
  delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className="group rounded-2xl border border-[#303030] bg-[#0D0D0D] p-8 text-center transition-all duration-300 hover:border-[#606060] hover:bg-[#111111]"
  >
    <span className="mb-3 block text-4xl font-semibold text-white transition-colors md:text-5xl">
      <NumberTicker value={number} format={formatNumber} />
    </span>
    <p className="text-base font-medium text-[#C5C5C5]">{label}</p>
  </motion.div>
)
