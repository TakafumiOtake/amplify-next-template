"use client"

import React from 'react'
import { Authenticator as AmplifyAuthenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";

function Authenticator({children}: {children: React.ReactNode}) {
  return (
    <AmplifyAuthenticator>
      {children}
    </AmplifyAuthenticator>
  )
}

export default Authenticator