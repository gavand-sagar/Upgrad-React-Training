import React, { Suspense, useState } from 'react'
import { lazy } from 'react'
// eager import : not good for large files, if its not alwasy being rendered
//import LazyComp1 from './LazyComp1'

// Lazy loading
const LazyComp1 = lazy(() => import('./LazyComp1'))

// eager loading
// import { MyCustomAlert } from './HelperFunction'

export default function LazyLoadingDemo() {
    const [toggle, setToggle] = useState(false)
    function handleAlert() {
        // Dynamic Import (only when other module is big enough and its optional to get inside this feature)
        import('./HelperFunction').then(x => {
            x.MyCustomAlert("Test Alert")
        })
    }
    return (
        <div>
            <h1>LazyLoadingDemo</h1>
            <button onClick={handleAlert}>Show Alert</button>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <Suspense fallback={<p>Failed to lazy load</p>}>
                {toggle && <LazyComp1 />}
            </Suspense>

        </div>
    )
}


// file = module