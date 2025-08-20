
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stellar Home Domain Configuration</title>
    <!-- CORS Meta Tags -->
    <meta http-equiv="Access-Control-Allow-Origin" content="https://stellar-home-dom/.well-known/stellar.tomlain.vercel.app">
    <meta http-equiv="Access-Control-Allow-Methods" content="GET, POST, PUT, DELETE, OPTIONS">
    <meta http-equiv="Access-Control-Allow-Headers" content="Content-Type, Authorization, X-API-Key, Stellar-Signature">
    <meta http-equiv="Access-Control-Allow-Credentials" content="true">
    <style>
        body {
            font-family: 'Courier New', monospace;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 300;
        }
        .config-section {
            padding: 20px;
        }
        .config-item {
            margin-bottom: 15px;
            padding: 10px;
            background: #f8f9fa;
            border-left: 4px solid #667eea;
            border-radius: 4px;
        }
        .config-key {
            font-weight: bold;
            color: #495057;
            display: inline-block;
            min-width: 200px;
        }
        .config-value {
            color: #0066cc;
            word-break: break-all;
        }
        .section-title {
            background: #e9ecef;
            padding: 10px 15px;
            margin: 20px 0 10px 0;
            border-radius: 4px;
            font-weight: bold;
            color: #495057;
            border-left: 4px solid #28a745;
        }
        .currency-section {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 4px;
            padding: 15px;
            margin: 15px 0;
        }
        .currency-title {
            font-weight: bold;
            color: #856404;
            margin-bottom: 10px;
        }
        .note {
            background: #d1ecf1;
            border: 1px solid #bee5eb;
            border-radius: 4px;
            padding: 15px;
            margin: 20px 0;
            color: #0c5460;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌟 Stellar Home Domain Configuration</h1>
            <p>stellar.toml Configuration File</p>
        </div>
        
        <div class="config-section">
            <div class="section-title">📋 Basic Configuration</div>
            
            <div class="config-item">
                <span class="config-key">ACCOUNT:</span>
                <span class="config-value">GBTDYXVX54UNZUY3GWGQKVRAXXCNGUFINLT5G6BHUZBDYW6FSIOZZWVM</span>
            </div>
            
            <div class="config-item">
                <span class="config-key">DOMAIN:</span>
                <span class="config-value">antidumpalways.github.io</span>
            </div>
            
            <div class="section-title">🔗 Server Endpoints</div>
            
            <div class="config-item">
                <span class="config-key">FEDERATION_SERVER:</span>
                <span class="config-value">https://antidumpalways.github.io/federation</span>
            </div>
            
            <div class="config-item">
                <span class="config-key">TRANSFER_SERVER:</span>
                <span class="config-value">https://antidumpalways.github.io/transfer</span>
            </div>
            
            <div class="config-item">
                <span class="config-key">TRANSFER_SERVER_SEP0024:</span>
                <span class="config-value">https://antidumpalways.github.io/transfer24</span>
            </div>
            
            <div class="config-item">
                <span class="config-key">KYC_SERVER:</span>
                <span class="config-value">https://antidumpalways.github.io/kyc</span>
            </div>
            
            <div class="config-item">
                <span class="config-key">WEB_AUTH_ENDPOINT:</span>
                <span class="config-value">https://antidumpalways.github.io/auth</span>
            </div>
            
            <div class="section-title">🌐 Network Configuration</div>
            
            <div class="config-item">
                <span class="config-key">HORIZON_URL:</span>
                <span class="config-value">https://horizon-testnet.stellar.org</span>
            </div>
            
            <div class="config-item">
                <span class="config-key">SIGNING_KEY:</span>
                <span class="config-value">GBTDYXVX54UNZUY3GWGQKVRAXXCNGUFINLT5G6BHUZBDYW6FSIOZZWVM</span>
            </div>
            
            <div class="section-title">🔒 CORS Configuration</div>
            
            <div class="config-item">
                <span class="config-key">ALLOWED_ORIGIN:</span>
                <span class="config-value">https://stellar-home-dom/.well-known/stellar.tomlain.vercel.app</span>
            </div>
            
            <div class="config-item">
                <span class="config-key">ALLOWED_METHODS:</span>
                <span class="config-value">GET, POST, PUT, DELETE, OPTIONS, HEAD</span>
            </div>
            
            <div class="config-item">
                <span class="config-key">ALLOWED_HEADERS:</span>
                <span class="config-value">Content-Type, Authorization, X-API-Key, Stellar-Signature</span>
            </div>
            
            <div class="config-item">
                <span class="config-key">CREDENTIALS:</span>
                <span class="config-value">true</span>
            </div>
            
            <div class="config-item">
                <span class="config-key">MAX_AGE:</span>
                <span class="config-value">86400 seconds (24 hours)</span>
            </div>
            
            <div class="section-title">💱 Currency Configuration</div>
            
            <div class="currency-section">
                <div class="currency-title">TEST Token</div>
                <div class="config-item">
                    <span class="config-key">Code:</span>
                    <span class="config-value">TEST</span>
                </div>
                <div class="config-item">
                    <span class="config-key">Issuer:</span>
                    <span class="config-value">GBTDYXVX54UNZUY3GWGQKVRAXXCNGUFINLT5G6BHUZBDYW6FSIOZZWVM</span>
                </div>
                <div class="config-item">
                    <span class="config-key">Display Decimals:</span>
                    <span class="config-value">7</span>
                </div>
            </div>
            
            <div class="note">
                <strong>ℹ️ Note:</strong> This configuration is set up for the Stellar testnet environment. 
                The HORIZON_URL points to the testnet, and all endpoints are configured for your GitHub Pages domain.
            </div>
            
            <div class="section-title">🧪 CORS Testing</div>
            
            <div class="config-section">
                <div class="config-item">
                    <button id="testCorsBtn" onclick="testCors()" style="background: #667eea; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin-right: 10px;">
                        Test CORS Configuration
                    </button>
                    <button id="testStellarTomlBtn" onclick="testStellarToml()" style="background: #28a745; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">
                        Test Stellar TOML Access
                    </button>
                </div>
                
                <div id="corsTestResult" style="margin-top: 15px; padding: 15px; border-radius: 4px; display: none;"></div>
            </div>
        </div>
    </div>
    
    <script>
        // CORS Testing Functions
        async function testCors() {
            const resultDiv = document.getElementById('corsTestResult');
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = '<div style="background: #fff3cd; padding: 10px; border-radius: 4px;">🔄 Testing CORS configuration...</div>';
            
            try {
                // Test CORS preflight request
                const response = await fetch('http://localhost:3000/api/stellar-info', {
                    method: 'OPTIONS',
                    headers: {
                        'Origin': 'https://stellar-home-dom/.well-known/stellar.tomlain.vercel.app',
                        'Access-Control-Request-Method': 'GET',
                        'Access-Control-Request-Headers': 'Content-Type'
                    }
                });
                
                if (response.ok) {
                    resultDiv.innerHTML = '<div style="background: #d4edda; padding: 10px; border-radius: 4px; color: #155724;">✅ CORS preflight successful! Server allows cross-origin requests.</div>';
                } else {
                    resultDiv.innerHTML = '<div style="background: #f8d7da; padding: 10px; border-radius: 4px; color: #721c24;">❌ CORS preflight failed. Status: ' + response.status + '</div>';
                }
            } catch (error) {
                resultDiv.innerHTML = '<div style="background: #f8d7da; padding: 10px; border-radius: 4px; color: #721c24;">❌ CORS test failed: ' + error.message + '</div>';
            }
        }
        
        async function testStellarToml() {
            const resultDiv = document.getElementById('corsTestResult');
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = '<div style="background: #fff3cd; padding: 10px; border-radius: 4px;">🔄 Testing Stellar TOML access...</div>';
            
            try {
                const response = await fetch('http://localhost:3000/.well-known/stellar.toml', {
                    method: 'GET',
                    headers: {
                        'Origin': 'https://stellar-home-dom/.well-known/stellar.tomlain.vercel.app'
                    }
                });
                
                if (response.ok) {
                    const tomlContent = await response.text();
                    resultDiv.innerHTML = '<div style="background: #d4edda; padding: 10px; border-radius: 4px; color: #155724;">✅ Stellar TOML accessed successfully!<br><br><strong>Content Preview:</strong><br><pre style="background: #f8f9fa; padding: 10px; border-radius: 4px; font-size: 12px; overflow-x: auto;">' + tomlContent.substring(0, 200) + '...</pre></div>';
                } else {
                    resultDiv.innerHTML = '<div style="background: #f8d7da; padding: 10px; border-radius: 4px; color: #721c24;">❌ Failed to access Stellar TOML. Status: ' + response.status + '</div>';
                }
            } catch (error) {
                resultDiv.innerHTML = '<div style="background: #f8d7da; padding: 10px; border-radius: 4px; color: #721c24;">❌ Stellar TOML test failed: ' + error.message + '</div>';
            }
        }
        
        // Display current CORS settings
        document.addEventListener('DOMContentLoaded', function() {
            console.log('🌐 CORS Configuration Loaded');
            console.log('Allowed Origin:', 'https://stellar-home-dom/.well-known/stellar.tomlain.vercel.app');
            console.log('Allowed Methods:', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
            console.log('Allowed Headers:', 'Content-Type, Authorization, X-API-Key, Stellar-Signature');
        });
    </script>
</body>
</html>
