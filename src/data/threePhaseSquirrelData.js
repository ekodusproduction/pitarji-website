import React from 'react'
import dummyproductimage from '/images/products/dummyproduct.png'
import StandardThreePhase from '/images/products/ThreePhase/ThreePhaseStandard.png'
import HighEfficiency from '/images/products/ThreePhase/HighEfficiency.png'
import InverterFed from '/images/products/ThreePhase/inverter_fed.png'
import HighTorque from '/images/products/ThreePhase/high-torque.png'
import Multispeed from '/images/products/ThreePhase/multispeed.png'
import Dualvoltage from '/images/products/ThreePhase/dual-voltage.png'
import ThreePhaseExplosionProof from '/images/products/ThreePhase/threePhaseExplosionProof.png'
import BrakeMotor from '/images/products/ThreePhase/brake-motor.png'
import HighSlipMotor from '/images/products/ThreePhase/high-slip.png'

export const data = [
    {
      id: 1,
      title: 'Standard Three-Phase Induction Motors',
      image: StandardThreePhase,
      description: ' Standard three-phase induction motors feature a simple construction with a squirrel cage rotor, laminated iron cores, and aluminum or copper bars. They operate based on electromagnetic induction principles.',
      applications: 'Widely used in general-purpose applications, including pumps, fans, compressors, conveyors, and other industrial machinery.',
      range: '0.5 HP to 500 HP',
      standard: 'IEC or NEMA',
      features: [
        'Durability.',
        'Versatility',
        'Cost Effective',
        'Suitable for a wide range of industrial applications',
      ],
      technicalspecs: {

      },
      quality: '',
      application: '',
      download_iso: '',
    },
    {
        id: 2,
        title: 'High-Efficiency Three-Phase Motors:',
        image: HighEfficiency,
        description: 'High-efficiency three-phase motors are engineered to achieve superior energy efficiency through advanced materials, optimized magnetic designs, and reduced losses.',
        applications: 'Ideal for continuous industrial processes, HVAC systems, and operations with consistent loads where energy conservation is critical.',
        range: '1 HP to 500 HP',
        standard: 'NEMA Premium or IE3 efficiency levels',
        features: [
          'Increased efficiency',
          'Reduced energy consumption',
          'Lower operating costs',
          'Less heat',
          'Longer motor life',
        ],
        technicalspecs: {
  
        },
        quality: '',
        application: '',
        download_iso: '',
    },

    {
    id: 3,
    title: 'Inverter-Fed Motors',
    image: InverterFed,
    description: 'Inverter-fed motors are specifically designed to be used with variable frequency drives (inverters), allowing for precise speed control.',
    applications: 'Ideal for systems where adjustable speed is essential for process optimization, energy efficiency, and dynamic control.',
    range: ' 1 HP to 500 HP',
    standard: 'IS',
    features: [
        'Compatibility with variable frequency drives',
        'Enabling fine-tuned speed control',
        'Efficient operation at varying speeds',
    ],
    technicalspecs: {

    },
    quality: '',
    application: '',
    download_iso: '',
    },
    {
    id: 4,
    title: 'High Starting Torque Motors',
    image: HighTorque,
    description: 'High starting torque motors are engineered to deliver a higher torque during startup, addressing the demand for additional power in applications with heavy initial loads.',
    applications: 'Crushers, Compressors, Heavy Machinery',
    range: '1HP to 500HP',
    standard: 'IS',
    features: [
        'Enhanced starting torque capabilities.',
        'Ensuring reliable startup performance in challenging conditions',
    ],
    technicalspecs: {

    },
    quality: '',
    application: '',
    download_iso: '',
    },
    {
    id: 5,
    title: 'Multi-Speed Motors:',
    image: Multispeed,
    description: 'Multi-speed motors are designed with multiple stator windings to operate at different speeds, offering flexibility in applications with varying load conditions.',
    applications: 'Machine tools, Conveyors, Fans',
    range: '0.5 HP to 300 HP',
    standard: 'IS',
    features:[
        'Versatility in speed control',

    ],
    technicalspecs: {

    },
    quality: 'IMAGE',
    download_iso: 'DOWNLOAD BUTTON',
    },
    {
    id: 6,
    title: 'Dual Voltage Motors:',
    image: Dualvoltage,
    description: 'Dual voltage motors are capable of operating at two different voltage levels, providing flexibility in installation where voltage variations are present.',
    applications: 'Suitable for scenarios where multiple voltage options are required, allowing for ease of integration into different electrical systems',
    range: '1 HP to 500 HP.',
    standard: 'IS',
    features: [
        ' Dual voltage capability'
    ],
    technicalspecs: {

    },
    quality: '',
    application: '',
    download_iso: '',
    },
    {
    id: 7,
    title: 'Explosion Proof Motors',
    image: ThreePhaseExplosionProof,
    description: "Explosion-proof motors are designed to operate in hazardous environments containing flammable gases or dust, featuring construction that minimizes the risk of sparking.",
    applications: 'Petrochemical plants, Mines',
    range: '1 HP to 300 HP',
    standard: 'IECEx, NEC',
    features:[
        'Robust construction to contain potential explosions',
        'Preventing external ignition sources',
        'Ensuring safety in hazardous environments'
    ],
    technicalspecs: {

    },
    quality: '',
    application: '',
    download_iso: '',
    },
    {
    id: 8,
    title: 'Brake Motor',
    image: BrakeMotor,
    description: "Brake motors are equipped with an integrated brake mechanism for rapid stopping or holding loads in place.",
    applications: 'Elevators, Cranes, Conveyor system',
    range: '0.5 HP to 200 HP',
    standard: 'IEC, IS',
    features: [
        'Improved control',
        'Safety'
    ],
    technicalspecs: {

    },
    quality: '',
    application: '',
    download_iso: '',
    },
    {
    id: 9,
    title: 'High Slip Motor',
    image: HighSlipMotor,
    description: "High slip motors are designed to operate efficiently at high slip values, making them suitable for applications with varying loads.",
    applications: 'Crusher, Reciprocating pumps',
    range: '1HP to 500HP	',
    standard: 'IEC, IS',
    features: [
        'Effienct at High slip values', 
        'Better performance' ,
        'Torque'
    ],
    technicalspecs: {

    },
    quality: '',
    application: '',
    download_iso: '',
    },

  ]