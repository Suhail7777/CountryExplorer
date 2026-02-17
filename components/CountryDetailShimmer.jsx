import React from 'react'
import './CountryDetailShimmer.css'
import { useTheme } from '../Hooks/useTheme'

export default function CountryDetailShimmer() {
  const [isDark, setIsDark] = useTheme()
  return (
    <main className={`${isDark ? 'dark' : ''}`} >
      <div className="country-details-container">
        <span className="back-button shimmer-box"></span>

        <div className="country-details">
          {/* Flag shimmer */}
          <div className="shimmer-flag shimmer-box"></div>

          <div className="details-text-container">
            {/* Title */}
            <div className="shimmer-title shimmer-box"></div>

            <div className="details-text">
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="shimmer-line shimmer-box"></div>
                ))}
            </div>

            {/* Border countries */}
            <div className="border-countries">
              <div className="shimmer-border shimmer-box"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
