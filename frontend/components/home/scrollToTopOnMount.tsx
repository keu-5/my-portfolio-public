"use client"
import React, { Component } from 'react';

export default class ScrollToTopOnMount extends Component {
    componentDidMount(prevProps: void) {
        window.scrollTo(0, 0);
    }

    render() {
        return null;
    }
}