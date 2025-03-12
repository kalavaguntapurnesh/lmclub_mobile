import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const TermsConditionsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Fixed Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Terms Of Use & Privacy Policy</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>LM Club Privacy Statement</Text>
          <Text style={styles.text}>
            This online privacy policy (“Privacy Policy”) applies to the
            operation of the APP / Website (www.The Laoe Maom Group / LM
            CLUB.com) (the “APP / Website”), mobile app (“App”), and all
            associated services (collectively, the “Online Services”) provided
            by The Laoe Maom Group (“The Laoe Maom Group / LM CLUB” or “We”) and
            any of The Laoe Maom Group / LM CLUB’s affiliated companies. The
            Laoe Maom Group / LM CLUB and its affiliates are committed to
            respecting and maintaining the privacy of information that is
            gathered through your access to or use of the Online Services, as
            well as all legal requirements and regulations under applicable
            privacy laws in the United States.
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Copyright Notice</Text>
          <Text style={styles.text}>
            All content appearing on this Web site is the property of Laoe Maom.
            Copyright ©️ 2025, Laoe Maom. All rights reserved. As a user, you
            are authorized only to view, copy, print, and distribute documents
            on this Web site so long as (1) the document is used for
            informational purposes only, and (2) any copy of the document (or
            portion thereof) includes the following copyright notice: Copyright
            ©️ 2025, Laoe Maom. All rights reserved.
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Trademarks</Text>
          <Text style={styles.text}>
            All brand, product, service, and process names appearing on this Web
            site are trademarks of their respective holders. Reference to or use
            of a product, service, or process does not imply recommendation,
            approval, affiliation, or sponsorship of that product, service, or
            process by Laoe Maom. Nothing contained herein shall be construed as
            conferring by implication, estoppel, or otherwise any license or
            right under any patent, copyright, trademark, or other intellectual
            property right of Laoe Maom or any third party, except as expressly
            granted herein.
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Terms of Use</Text>
          <Text style={styles.text}>
            This site may contain other proprietary notices and copyright
            information, the terms of which must be observed and followed.
            Information on this site may contain technical inaccuracies or
            typographical errors. Information, including product pricing and
            availability, may be changed or updated without notice. Laoe Maom
            and its subsidiaries reserve the right to refuse service, terminate
            accounts, and/or cancel orders in its discretion, including, without
            limitation, if Laoe Maom believes that customer conduct violates
            applicable law or is harmful to the interests of Laoe Maom and its
            subsidiaries.
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Legal Notice</Text>
          <Text style={styles.text}>
            All notices from Laoe Maom to You may be posted on our Web site and
            will be deemed delivered within thirty (30) days after posting.
            Notices from You to Laoe Maom shall be made either by regular mail,
            sent to the address we provide on our Web site, or first class mail
            to our address at: Delivery shall be deemed to have been made by You
            to Laoe Maom five (5) days after the date sent.{' '}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TermsConditionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 10,
    alignItems: 'center',
  },
  heading: {
    fontWeight: '800',
    fontSize: 18,
    color: '#ffffff',
    paddingTop: 16,
  },
  scrollContent: {
    paddingTop: 120,
    paddingBottom: 80,
  },
  content: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    width: '100%',
    backgroundColor:'#f2f2f3',
  },
  closeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4,
    width: '90%',
  },
  closeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center',
  },
});
