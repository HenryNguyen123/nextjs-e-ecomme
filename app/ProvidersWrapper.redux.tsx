'use client';
import React from 'react';
import ReduxProviders from "@/app/proriders.redux";

interface ProvidersWrapperProps {
  children: React.ReactNode;
}

export default function ProvidersWrapper({ children }: ProvidersWrapperProps) {
  return <ReduxProviders>{children}</ReduxProviders>;
}
