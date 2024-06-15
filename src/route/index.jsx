import React from 'react'
import { lazy } from 'react'
import { Outlet } from 'react-router-dom'
const ACoponent = lazy(() => import('@/components/MyA'))

export const Pages = [
  {
    path: '/',
    element: <ACoponent />
  },
  {
    path: '/zh',
    element: <Outlet />,
    children: [
      {
        path: 'home',
        element: <ACoponent />
      }
    ]
  },
  {
    path: '/en',
    element: <Outlet />,
    children: [
      {
        path: 'home',
        element: <ACoponent />
      }
    ]
  }
]
