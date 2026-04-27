import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './AuthContext.tsx';
import AppNavigator from './AppNavigator.tsx';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Alert,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';

// const App = () => {
//   const [username, setUsername] = useState('test');
//   const [password, setPassword] = useState('test');
//   const [loading, setLoading] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userData, setUserData] = useState<any>(null);

//   // Use 10.0.2.2 for Android emulator
//   const SERVER_URL = 'http://10.0.2.2:5000';

//   const testFetch = async () => {
//     setLoading(true);
//     try {
//       console.log('=== Testing connection to:', SERVER_URL + '/api/test');
      
//       const response = await fetch(SERVER_URL + '/api/test');
//       console.log('Response status:', response.status);
      
//       const text = await response.text();
//       console.log('Response text:', text);
      
//       Alert.alert('Connection Success!', text);
//     } catch (error: any) {
//       console.log('Error:', error.message);
//       Alert.alert(
//         'Connection Failed',
//         error.message + '\n\nTrying to reach: ' + SERVER_URL
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const doLogin = async () => {
//     setLoading(true);
//     try {
//       console.log('Login URL:', SERVER_URL + '/api/login');
//       console.log('Credentials:', { username, password: '***' });
      
//       const response = await fetch(SERVER_URL + '/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
      
//       console.log('Login status:', response.status);
      
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Login success:', JSON.stringify(data));
//         setUserData(data);
//         setLoggedIn(true);
//         Alert.alert('Login Success', `Welcome ${data.username}!`);
//       } else {
//         const errorData = await response.text();
//         console.log('Login error response:', errorData);
//         Alert.alert('Login Failed', errorData || 'Invalid credentials');
//       }
//     } catch (error: any) {
//       console.log('Login error:', error.message);
//       Alert.alert('Network Error', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loggedIn && userData) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text style={styles.title}>Welcome!</Text>
//         <View style={styles.card}>
//           <Text style={styles.info}>Username: {userData.username}</Text>
//           <Text style={styles.info}>Email: {userData.email}</Text>
//           <Text style={styles.info}>ID: {userData.id}</Text>
//         </View>
//         <TouchableOpacity
//           style={[styles.button, styles.logoutButton]}
//           onPress={() => {
//             setLoggedIn(false);
//             setUserData(null);
//           }}
//         >
//           <Text style={styles.buttonText}>Logout</Text>
//         </TouchableOpacity>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Note App Login</Text>
//       <Text style={styles.subtitle}>Server: {SERVER_URL}</Text>
      
//       <View style={styles.card}>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Username</Text>
//           <TextInput
//             style={styles.input}
//             value={username}
//             onChangeText={setUsername}
//             placeholder="Enter username"
//             autoCapitalize="none"
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Password</Text>
//           <TextInput
//             style={styles.input}
//             value={password}
//             onChangeText={setPassword}
//             placeholder="Enter password"
//             secureTextEntry
//           />
//         </View>

//         {loading ? (
//           <ActivityIndicator size="large" color="#6200ee" style={{ margin: 20 }} />
//         ) : (
//           <>
//             <TouchableOpacity style={styles.button} onPress={doLogin}>
//               <Text style={styles.buttonText}>Login</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={[styles.button, styles.testButton]} onPress={testFetch}>
//               <Text style={styles.buttonText}>Test Connection First</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>
      
//       <Text style={styles.hint}>Demo: test / test</Text>
//       <Text style={styles.hint}>First try "Test Connection" button</Text>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f5',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#6200ee',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#888',
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 20,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   inputContainer: {
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 5,
//   },
//   input: {
//     backgroundColor: '#f9f9f9',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 16,
//     color: '#333',
//   },
//   button: {
//     backgroundColor: '#6200ee',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   testButton: {
//     backgroundColor: '#4caf50',
//   },
//   logoutButton: {
//     backgroundColor: '#f44336',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   hint: {
//     textAlign: 'center',
//     color: '#888',
//     fontSize: 12,
//     marginTop: 10,
//   },
//   info: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 8,
//   },
// });

// export default App;