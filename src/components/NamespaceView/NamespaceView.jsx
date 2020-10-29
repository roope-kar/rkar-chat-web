import React from 'react';
import { useParams } from 'react-router-dom';

export default function NamespaceView() {
  const { namespaceId } = useParams();
  return <div className={'NamespaceView'}>{namespaceId}</div>;
}
