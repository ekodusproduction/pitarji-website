import React from "react";

import ThreePhaseSRMotor from '/images/products/ThreePhase/ThreePhaseSRMotor.png'
import SalientPole from '/images/products/ThreePhase/salientPole.png'
import Hysteresis from '/images/products/ThreePhase/hysteresis.png'
import PMSM from '/images/products/ThreePhase/pmsm.png'
import IPMSM from '/images/products/ThreePhase/ipmsm.png'
import Reluctance from '/images/products/ThreePhase/reluctance.png'

export const srMotorData = [
    {
        id: 1,
        title: 'Cylindrical Rotor Synchronous Motors',
        image: ThreePhaseSRMotor,
        description: 'The rotor is a cylindrical structure with salient poles and windings.',
        applications: 'Conveyors, Mixers',
        range: '-',
        standard: 'IEC or NEMA',
        features: [
          'Provides high torque at lower speeds.',
          'Applications with varying load conditions.',
        ],
        technicalspecs: {
  
        },
        quality: '',
        application: '',
        download_iso: '',
    },
    {
      id: 2,
      title: 'Salient Pole Synchronous Motors',
      image: SalientPole,
      description: 'The rotor has projecting poles.',
      applications: 'Driving ball mills, crushers, Heay Machinery',
      range: '-',
      standard: 'IEC or NEMA',
      features: [
        'Applications demanding high torque',
        'For heavy-duty applications',
      ],
      technicalspecs: {

      },
      quality: '',
      application: '',
      download_iso: '',
    },
    {
      id: 3,
      title: 'Hysteresis Synchronous Motors',
      image: Hysteresis,
      description: 'Rotor made of high coercivity material, operating based on hysteresis effects.',
      applications: 'Clock ',
      range: '-',
      standard: 'IEC',
      features: [
        'Operates with minimal torque variations',
        'Excellent for applications requiring precise speed control',
      ],
      technicalspecs: {

      },
      quality: '',
      application: '',
      download_iso: '',
    },
    {
      id: 4,
      title: 'Permanent Magnet Synchronous Motors ',
      image: PMSM,
      description: 'Rotor includes permanent magnets creating a constant magnetic field.',
      applications: 'Electric vehicles, Robotics, Industrial machinery ',
      range: '-',
      standard: 'IEC, NEMA',
      features: [
        'High efficiency and power density.',
        'Precise speed control.',
      ],
      technicalspecs: {

      },
      quality: '',
      application: '',
      download_iso: '',
    },
    {
      id: 5,
      title: 'Interior Permanent Magnet Synchronous Motors',
      image: IPMSM,
      description: 'Similar to PMSMs, with permanent magnets embedded inside the rotor core.',
      applications: 'Advanced robotics , Electric propulsion systems',
      range: '-',
      standard: 'IEC, NEMA',
      features: [
        'Designed for high-performance applications',
        'Combines advantages of PMSMs with additional design features',
      ],
      technicalspecs: {

      },
      quality: '',
      application: '',
      download_iso: '',
    },
    {
      id: 6,
      title: 'Reluctance Synchronous Motors',
      image: Reluctance,
      description: 'Operates based on the principle of reluctance to generate torque',
      applications: 'Industrial machinery, Automation',
      range: '-',
      standard: 'IEC, NEMA',
      features: [
        'Well-suited for applications requiring high torque density',
        'Offers efficiency and precise control',
      ],
      technicalspecs: {

      },
      quality: '',
      application: '',
      download_iso: '',
    }
]