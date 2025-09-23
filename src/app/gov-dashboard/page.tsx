
// src/app/gov-dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, Users, MessageSquare, ShoppingCart, BarChart } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getRegisteredUsers } from '@/lib/data/users';
import { getFeedbackWithSentiment } from '@/lib/data/feedback';
import { getOrderDetails } from '@/lib/data/orders';

// Define types for our data
interface User {
    id: string;
    name: string;
    email: string;
    signupDate: string;
}

interface Feedback {
    id: string;
    user: string;
    feedback: string;
    sentiment: string;
}

interface Order {
    id: string;
    user: string;
    item: string;
    amount: string;
    date: string;
}

export default function GovDashboardPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [sentimentCounts, setSentimentCounts] = useState({ Positive: 0, Neutral: 0, Negative: 0 });

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const userType = localStorage.getItem('userType');
      if (userType !== 'official') {
        router.push('/auth/login');
        return;
      }
      
      // Fetch data
      getRegisteredUsers().then(setUsers);
      getFeedbackWithSentiment().then(fb => {
          setFeedback(fb);
          const counts = fb.reduce((acc, curr) => {
              acc[curr.sentiment as keyof typeof acc]++;
              return acc;
          }, { Positive: 0, Neutral: 0, Negative: 0 });
          setSentimentCounts(counts);
      });
      getOrderDetails().then(setOrders);
    }
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userType');
    }
    router.push('/auth/login');
  };

  if (!isClient) {
    return null; // Render nothing on the server
  }
  
  const totalSentiments = sentimentCounts.Positive + sentimentCounts.Neutral + sentimentCounts.Negative;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Government Dashboard</h1>
        <Button variant="ghost" onClick={handleLogout}>
          <LogOut className="mr-2 h-5 w-5" /> Logout
        </Button>
      </header>

      <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Registered Users */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center"><Users className="mr-2" /> Registered Users</CardTitle>
          </CardHeader>
          <CardContent>
             <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>User ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Signup Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map(user => (
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.signupDate}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Overall Sentiment Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><BarChart className="mr-2" /> Sentiment Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around items-center h-full">
                <div className="text-center">
                    <p className="text-4xl font-bold text-green-500">{totalSentiments > 0 ? Math.round((sentimentCounts.Positive / totalSentiments) * 100) : 0}%</p>
                    <p className="text-sm text-muted-foreground">Positive</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-yellow-500">{totalSentiments > 0 ? Math.round((sentimentCounts.Neutral / totalSentiments) * 100) : 0}%</p>
                    <p className="text-sm text-muted-foreground">Neutral</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-red-500">{totalSentiments > 0 ? Math.round((sentimentCounts.Negative / totalSentiments) * 100) : 0}%</p>
                    <p className="text-sm text-muted-foreground">Negative</p>
                </div>
            </div>
          </CardContent>
        </Card>

        {/* User Feedback */}
        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center"><MessageSquare className="mr-2" /> User Feedback</CardTitle>
          </CardHeader>
          <CardContent>
             <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Feedback ID</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Feedback</TableHead>
                        <TableHead>Sentiment</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {feedback.map(fb => (
                    <TableRow key={fb.id}>
                        <TableCell>{fb.id}</TableCell>
                        <TableCell>{fb.user}</TableCell>
                        <TableCell className="max-w-xs">{fb.feedback}</TableCell>
                        <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${fb.sentiment === 'Positive' ? 'bg-green-100 text-green-800' : fb.sentiment === 'Negative' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {fb.sentiment}
                            </span>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        {/* Order Details */}
        <Card className="col-span-1 lg:col-span-3">
            <CardHeader>
                <CardTitle className="flex items-center"><ShoppingCart className="mr-2"/> Order Details</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>User</TableHead>
                            <TableHead>Item</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map(order => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.user}</TableCell>
                                <TableCell>{order.item}</TableCell>
                                <TableCell>{order.amount}</TableCell>
                                <TableCell>{order.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
