import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const DrawerNav = createDrawerNavigator();
const TabNav = createBottomTabNavigator();

const songs = [
  { 
    id: 1, 
    title: 'Song P.I', 
    lyrics: `Narito ako sa isang lugar
na hindi 'ko maintindihan
Nakikipagsapalaran sa buhay
na ang hantungan ay kawalan.
De numero ang galaw ng tao,
bawat gawin ay may presyo
Oh, narito ako sa isang lugar
na hindi ko maintindihan.
Daing ng tao'y 'di pinapansin
nililipad ng hangin
Pagkain sa araw-araw hindi malaman
pa'no pagkakasyahin.
Lalong yumayaman kapag mayaman,
lalong naghihirap kapag mahirap
Oh, narito ako sa isang lugar
na hindi ko maintindihan.
Walang ginagawa
ang mga walang awa
Walang nagagawa kahit pa
ngumawa, magmakaawa,
Bumaha ng mga luha--- haaa!
Bumaha ng mga luha--- haaa!
Narito ako sa isang lugar
ng mga taong tumatakas
Naghahanap ng swerte sa iba
dahil dito'y wala ng bukas.
Kakarampot na sasahurin,
sa sobrang mahal ng mga bilihin
Oh, narito ako sa isang lugar
na hindi ko maintindihan.` 
  },
  { 
    id: 2, 
    title: 'Gawing Langit Ang Mundo', 
    lyrics: `Hindi nila naririnig, hinanaing sa barong-barong
Dahil palasyo nila'y may matibay na bubong
Hindi nila naririnig, mga kumakalam na tiyan
'Di tulad ng mesa nilang parang laging may handaan
Ikaw ba? Naririnig mo ba sila?
Ikaw ba?
Gawing langit ang mundo, makakaya natin 'to
Sa simula, ikaw at ako, tapos sila hanggang maging lahat na tayo
Oh, kay gandang masdan
Sa bawat taong nagugutom at nahihirapan, mayro'n kang matutulungan
Oh, gawing langit ang mundo
Wala silang pakiramdam sa nangyayaring kaguluhan
Basta mabulsa lang nila ang kaban ng ating bayan
Wala silang pakiramdam, magkaroon man ng digmaan
Kapangyarihan na nilang gawin tayong tau-tauhan
Ikaw ba? Nadarama mo ba ito?
Ikaw ba?
Gawing langit ang mundo, makakaya natin 'to
Sa simula, ikaw at ako, tapos sila hanggang maging lahat na tayo
Oh, kay gandang masdan
Sa bawat taong nagugutom at nahihirapan, mayro'n kang matutulungan
Oh, gawing langit ang mundo, makakaya natin 'to
Sa simula, ikaw at ako, tapos sila hanggang maging lahat na tayo
Oh, kay gandang masdan
Sa bawat taong nagugutom at nahihirapan, mayro'n kang matutulungan
Gawing langit ang mundo, makakaya natin 'to
Sa simula, ikaw at ako, tapos sila hanggang maging lahat na tayo
Oh, kay gandang masdan
Sa bawat taong nagugutom at nahihirapan, mayro'n kang matutulungan` 
  },
  { 
    id: 3, 
    title: 'Tropa', 
    lyrics: `Kuwentuhan na kabulastugan
Hindi malilimutan ang asaran na mayro'ng pikunan
Lalo na rin ang unang niligawan, unang kabiguan
At diyan na seseryoso ang usapan, ang pagdadamayan
Ng tunay at tapat na kaibigan, oh, mga buang
Kaibigan, lubhang maaasahan, oh
'Di na tayo pabata, edad ma'y 'di nahahalata
Sa mga trip, unti-unti na tayong nagsasawa
Pero kahit gano'n, barkadang matatag hanggang sa ngayon
Minsan man magkita, tiyak may kuwela, 'yan ang aking mga tropa
Inuman na pangmagdamagan
Minsan, inaabot pa ng ayaan na kung saan-saan
Na para bang walang kinabukasan at kahahantungan
At diyan na seseryoso ang usapan, ang pagpapayuhan
Ng tunay at tapat na kaibigan, oh, mga baliw
Kaibigan namang nakakaaliw, oh
'Di na tayo pabata, edad ma'y 'di nahahalata
Sa mga trip, unti-unti na tayong nagsasawa
Pero kahit gano'n, barkadang matatag hanggang sa ngayon
Minsan man magkita, tiyak may kuwela, 'yan ang aking mga tropa
'Di na tayo pabata, edad ma'y 'di nahahalata
Sa mga trip, unti-unti na tayong nagsasawa
Pero kahit gano'n, barkadang matatag hanggang sa ngayon
Minsan man magkita, tiyak may kuwela, 'yan ang aking mga tropa
'Di na tayo pabata, edad ma'y 'di nahahalata
Sa mga trip, unti-unti na tayong nagsasawa
Pero kahit gano'n, barkadang matatag hanggang sa ngayon
Minsan man magkita, tiyak may kuwela, 'yan ang aking mga tropa` 
  },
  { 
    id: 4, 
    title: 'Gabay', 
    lyrics: `Maririnig sa'yo
Sa pag dating mo sa mundo
Ang katahimikan malayo sa gulo
Sa inosenteng mga mata
Aking ipapakita
Wala ang kamunduhan
Walang pangangamba
Humawak ka lamang sa aking kamay
Ng matuklasan ang ganda nitong buhay
Iingatan ka't di pababayaan
Gabay mo ako sa iyong kapaligiran
Kaluskos ng dahon
Huni ng mga ibon malayo sa dilim ng kahapon
Hampas ng mga alon
Kasiyahan sa nayon
Mga batang naglalaro lang maghapon
Simoy ng hangin sari saring tanawin
Paligid na iyong tatahakin
Pagkat walang sawa kitang aarugain
Sa paraisong pinaglalagyan natin
Padarama sa iyo upang mahubog ng husto
Ang kabutihan sa kapwa tao
At sa mura mong isipan dapat mong malaman
Na may Diyos tayo na pasalamatan
Humawak ka lamang sa aking kamay
Ng matuklasan ang ganda nitong buhay
Iingatan kasi pababayaan
Gabay mo ako sa iyong kapaligiran
Kaluskos ng dahon
Huni ng mga ibon malayo sa dilim ng kahapon
Hampas ng mga alon
Kasiyahan sa nayon
Mga batang naglalaro lang maghapon
Simoy ng hangin sari saring tanawin
Paligid na iyong tatahakin
Pagkat walang sawa kitang aarugain
Sa paraisong pinaglalagyan natin` 
  },
  { 
    id: 5, 
    title: 'Ituloy Mo Lang', 
    lyrics: `Noong bata ka pa si Darna ang ginagaya
Minsan nama'y nagbi-bistida
Maging sa laruan manika ang napag-tripan
Ayaw mo ng baril-barilan
'Di ka nila sinasali
Hindi ka raw tunay na lalaki
Gusto ng tatay mo na ika'y mag-sundalo
Pero babae ang puso mo
Kahit lunurin ka wala ring napala sila
Nung sabi mong ika'y sirena
'Wag kang mag-alala
Matatanggap ka rin nila
At kahit na ano pa ang gusto mo
Basta wala ka bang tinatapakan na tao
Ituloy mo lang ito
Ang mahalaga ikaw ay masaya
'Wag mong intindihin ang sasabihin ng iba
Sila ang may problema
Walang pumapansin sa natatangi mong galing
Mas madalas ka pang laitin
Pinapakita mo na may silbi ka sa mundo
Ngunit walang rumirespeto
Lagi na lang iisipin
Sila na lang ang unawain
At kahit na ano pa ang gusto mo
Basta wala ka bang tinatapakan na tao
Ituloy mo lang ito
Ang mahalaga ikaw ay masaya
'Wag mong intindihin ang sasabihin ng iba
Sila ang may problema
Wag kang mag-alala
Matatanggap ka rin nila
At kahit na ano pa ang gusto mo
Basta wala ka bang tinatapakan na tao
Ituloy mo lang ito
Ang mahalaga ikaw ay masaya
'Wag mong intindihin ang sasabihin ng iba
Sila ang may problema
Silang lumalait silang mahilig manakit
Silang 'di pupunta sa langit
Silang nanlalait silang mahilig manakit
Silang 'di pupunta sa langit` 
  },
];

function Background({ children }) {
  return (
    <ImageBackground 
      source={require('/bidyow.png')}
      style={styles.bg}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
  },
});

function Home() {
  return (
    <Background>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
    </Background>
  );
}

function SongScreen({ route }) {
  const { song } = route.params;
  return (
    <Background>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 20, color: 'white' }}>{song.title}</Text>
        <Text style={{ color: 'white' }}>{song.lyrics}</Text>
      </View>
    </Background>
  );
}

function CustomDrawer({ navigation, ...rest }) {
  return (
    <DrawerContentScrollView {...rest}>
      <DrawerItemList {...rest} />
      <View style={{ padding: 10, borderTopWidth: 1, borderColor: '#ccc', marginTop: 20 }}>
        <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Songs</Text>
        {songs.map(s => (
          <TouchableOpacity
            key={s.id}
            onPress={() => navigation.navigate('SongTabs', { initialSong: s.title })}
            style={{ paddingVertical: 5 }}
          >
            <Text style={{ fontSize: 16 }}>{s.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
}
function MainDrawer() {
  return (
    <DrawerNav.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <DrawerNav.Screen name="Home" component={Home} />
      <DrawerNav.Screen 
        name="SongTabs" 
        component={SongTabs}
        options={{ drawerLabel: () => null, title: null, drawerIcon: () => null, swipeEnabled: true }}
      />
      <DrawerNav.Screen 
        name="SongDetail" 
        component={SongScreen}
        options={{ drawerLabel: () => null, title: null, drawerIcon: () => null, swipeEnabled: true }}
      />
    </DrawerNav.Navigator>
  );
}

function SongTabs({ route }) {
  const initialSong = route.param?.initialSong;
  return (
    <Background>
      <TabNav.Navigator initialRouteName={initialSong}>
        {songs.map(s => (
          <TabNav.Screen 
            key={s.id} 
            name={s.title} 
            component={SongScreen} 
            initialParams={{ song: s }} 
          />
        ))}
      </TabNav.Navigator>
    </Background>
  );
}

export default function App() {
  return <MainDrawer />;
}
