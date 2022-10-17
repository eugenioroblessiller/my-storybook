import './MyLabel.css';

import React from 'react';

interface MyLabelProps {
    /**
     * This is the message to show in label
     */
    label: string
    /**
     * This is the size of the labeñ
     */
    size: 'normal' | 'h1' | 'h2' | 'h3'
    /**
     * Setting capitalize to word
     */
    allCaps: boolean,
    /**
     * Color of the label
     */
    color: 'primary' | 'secondary' | 'tertiary'
    /**
     * Font Color (Personal)
     */
    fontColor?: string
}

export const MyLabel = ({ label = 'no label', size = 'normal', allCaps = false, color = 'primary', fontColor = '' }: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
