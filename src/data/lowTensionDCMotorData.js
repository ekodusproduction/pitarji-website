import React from "react";

import DCSeriesMotor from '/images/products/ThreePhase/dcSeries.png'
import DCShuntMotor from '/images/products/ThreePhase/dcShunt.png'
import DCCompoundMotor from '/images/products/ThreePhase/dcCompound.png'
import PMDCMotor from '/images/products/ThreePhase/pmdcMotor.png'
import BLDC from '/images/products/ThreePhase/bldc.png'
import Reluctance from '/images/products/ThreePhase/reluctance.png'

export const lowTensionDCMotor = [
    {
        id: 1,
        title: 'DC Series Motor',
        image: DCSeriesMotor,
        description: 'In a DC series motor, the field winding and armature are connected in series, providing a high starting torque. This motor is well-suited for applications where a robust and variable speed control is required, such as electric traction in vehicles and industrial machinery.',
        applications: 'Electric vehicles, Forklifts',
        range: '- to 600V',
        standard: 'IEC or NEMA',
        features: [
          'High starting torque',
          'Variable speed control',
          'Suited for applications with varying loads'
        ],
        technicalspecs: {
  
        },
        quality: '',
        application: '',
        download_iso: '',
    },
    {
      id: 2,
      title: 'DC Shunt Motors',
      image: DCShuntMotor,
      description: 'DC shunt motors have the field winding and armature connected in parallel (shunt). They offer good speed regulation, making them suitable for applications requiring constant speed, like conveyor systems and certain industrial machines.',
      applications: 'Conveyor systems, lathes, Small industrial machinery',
      range: '- to 600V',
      standard: 'IEC or NEMA',
      features: [
        'Good speed regulation',
        'Suitable for constant speed applications',
      ],
      technicalspecs: {

      },
      quality: '',
      application: '',
      download_iso: '',
    },
    {
      id: 3,
      title: 'DC Compound Motors',
      image: DCCompoundMotor,
      description: 'A compound DC motor combines features of both series and shunt motors, providing both high starting torque and good speed regulation. It\'s often used in applications where a balance between starting torque and speed control is crucial, such as in rolling mills and elevators.',
      applications: 'Rolling mills, Crushers, Elevators ',
      range: '- to 600V',
      standard: 'IEC or NEMA',
      features: [
        'Combines high starting torque with good speed regulation',
        'Suitable for applications with varying loads'
      ],
      technicalspecs: {

      },
      quality: '',
      application: '',
      download_iso: '',
    },
    {
      id: 4,
      title: 'Permanent Magnet DC Motor',
      image: PMDCMotor,
      description: 'Rotor includes permanent magnets creating a constant magnetic field.',
      applications: 'Electric fans, Household appliances, Small industrial equipment.',
      range: '- to 600V',
      standard: 'IEC or NEMA',
      features: [
        'Simple design with high efficiency',
        'Compact and lightweight'
      ],
      technicalspecs: {

      },
      quality: '',
      application: '',
      download_iso: '',
    },
    {
      id: 5,
      title: 'Brushless DC Motor ',
      image: BLDC,
      description: 'Unlike traditional DC motors, BLDC motors use electronic commutation instead of brushes, leading to improved efficiency and reliability. They offer precise speed control, making them suitable for applications in computer hard drives, electric vehicles, and industrial automation.',
      applications: 'Computer hard drives, Electric vehicles, Industrial automation',
      range: '- to 600V',
      standard: 'IEC or NEMA',
      features: [
        'High starting torque',
        'Variable speed control',
        'Suited for applications with varying loads'
      ],
      technicalspecs: {

      },
      quality: '',
      application: '',
      download_iso: '',
    }
]